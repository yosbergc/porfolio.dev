import { spawnSync } from 'node:child_process'
import crypto from 'node:crypto'
import { existsSync } from 'node:fs'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import sharp from 'sharp'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_DIR = path.join(ROOT, 'public', 'Portfolio')
const THUMB_DIR = path.join(ROOT, 'src', 'assets', 'designs')
const VIDEO_DIR = path.join(ROOT, 'public', 'designs', 'videos')
const CATALOG_FILE = path.join(ROOT, 'src', 'data', 'designs.generated.ts')

const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif', '.gif'])
const VIDEO_EXTENSIONS = new Set(['.mp4', '.webm', '.mov', '.m4v'])
const THUMB_MAX = 1400
const THUMB_QUALITY = 82
const VIDEO_MAX_HEIGHT = 720
const VIDEO_VERSION = 1

const hasFfmpeg = commandExists('ffmpeg')
const hasFfprobe = commandExists('ffprobe')

function commandExists(command) {
  try {
    const result = spawnSync(command, ['-version'], { stdio: 'ignore' })
    return result.status === 0
  } catch {
    return false
  }
}

function toPosix(value) {
  return value.split(path.sep).join('/')
}

function slugify(value) {
  const slug = value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

  return slug || 'design'
}

function prettyName(filename) {
  const withoutExtension = filename.replace(/\.[^.]+$/, '')
  const cleaned = withoutExtension.replace(/_/g, ' ').replace(/\s+/g, ' ').trim()
  if (!cleaned) return filename
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1)
}

function encodePublicPath(relativePath) {
  return `/Portfolio/${relativePath.split('/').map((segment) => encodeURIComponent(segment)).join('/')}`
}

async function statOrNull(target) {
  try {
    return await fs.stat(target)
  } catch {
    return null
  }
}

async function isStale(source, output) {
  const sourceStat = await statOrNull(source)
  const outputStat = await statOrNull(output)
  if (!sourceStat || !outputStat) return true
  return sourceStat.mtimeMs > outputStat.mtimeMs
}

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue
    const absolute = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await walk(absolute)))
      continue
    }
    if (entry.isFile()) files.push(absolute)
  }

  return files
}

async function readImageMetadata(file) {
  try {
    const metadata = await sharp(file).metadata()
    return {
      width: metadata.width ?? 0,
      height: metadata.height ?? 0,
    }
  } catch {
    return { width: 0, height: 0 }
  }
}

function readVideoMetadata(file) {
  if (!hasFfprobe) return { width: 0, height: 0, duration: 0 }

  try {
    const result = spawnSync(
      'ffprobe',
      [
        '-v',
        'error',
        '-select_streams',
        'v:0',
        '-show_entries',
        'stream=width,height,duration',
        '-of',
        'json',
        file,
      ],
      { encoding: 'utf8' },
    )

    if (result.status !== 0 || !result.stdout) return { width: 0, height: 0, duration: 0 }

    const parsed = JSON.parse(result.stdout)
    const stream = parsed.streams?.[0] ?? {}
    return {
      width: Number(stream.width) || 0,
      height: Number(stream.height) || 0,
      duration: Number(stream.duration) || 0,
    }
  } catch {
    return { width: 0, height: 0, duration: 0 }
  }
}

async function createImageThumbnail(source, output) {
  if (!(await isStale(source, output))) return true

  try {
    await sharp(source)
      .rotate()
      .resize({
        width: THUMB_MAX,
        height: THUMB_MAX,
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ quality: THUMB_QUALITY, effort: 4 })
      .toFile(output)

    return true
  } catch (error) {
    console.warn(`[designs] No se pudo crear la miniatura de ${source}: ${error.message}`)
    return false
  }
}

function extractVideoFrame(source, timestamp, width) {
  const result = spawnSync(
    'ffmpeg',
    [
      '-v',
      'error',
      '-ss',
      String(timestamp),
      '-i',
      source,
      '-frames:v',
      '1',
      '-vf',
      `scale=${width}:-2`,
      '-f',
      'image2pipe',
      '-vcodec',
      'mjpeg',
      '-',
    ],
    { maxBuffer: 32 * 1024 * 1024 },
  )

  if (result.status !== 0 || !result.stdout?.length) return null
  return result.stdout
}

async function findBestPosterTimestamp(source, duration) {
  const safeDuration = duration > 0 ? duration : 1
  const fractions = [0.02, 0.15, 0.3, 0.5, 0.7, 0.85]
  const candidates = []

  for (const fraction of fractions) {
    const timestamp = Math.min(
      Math.max(safeDuration * fraction, 0.2),
      Math.max(safeDuration - 0.2, 0.2),
    )
    const frame = extractVideoFrame(source, timestamp, 320)
    if (!frame) continue

    try {
      const stats = await sharp(frame).stats()
      const entropy = stats.entropy ?? 0
      const sharpness = stats.sharpness ?? 0
      candidates.push({ timestamp, score: entropy * (1 + sharpness) })
    } catch {
      continue
    }
  }

  if (candidates.length === 0) {
    return duration > 0 ? Math.min(Math.max(duration * 0.2, 0.5), 12) : 0.5
  }

  candidates.sort((a, b) => b.score - a.score)
  return candidates[0].timestamp
}

async function createVideoPoster(source, output, duration) {
  if (!hasFfmpeg) return false
  if (!(await isStale(source, output))) return true

  const timestamp = await findBestPosterTimestamp(source, duration)
  const result = spawnSync(
    'ffmpeg',
    [
      '-v',
      'error',
      '-ss',
      String(timestamp),
      '-i',
      source,
      '-frames:v',
      '1',
      '-vf',
      `scale='min(${THUMB_MAX},iw)':-2`,
      '-f',
      'image2pipe',
      '-vcodec',
      'png',
      '-',
    ],
    { maxBuffer: 128 * 1024 * 1024 },
  )

  if (result.status !== 0 || !result.stdout?.length) {
    const message = result.stderr?.toString().trim()
    console.warn(`[designs] No se pudo extraer el póster de ${source}${message ? `: ${message}` : ''}`)
    return false
  }

  try {
    await sharp(result.stdout)
      .resize({
        width: THUMB_MAX,
        height: THUMB_MAX,
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ quality: THUMB_QUALITY, effort: 4 })
      .toFile(output)

    return true
  } catch (error) {
    console.warn(`[designs] No se pudo convertir el póster de ${source}: ${error.message}`)
    return false
  }
}

async function createOptimizedVideo(source, output, width, height) {
  if (!hasFfmpeg || !width || !height) return false
  if (!(await isStale(source, output))) return true

  const scale = width >= height ? `scale=-2:${VIDEO_MAX_HEIGHT}` : `scale=${VIDEO_MAX_HEIGHT}:-2`

  const result = spawnSync(
    'ffmpeg',
    [
      '-v',
      'error',
      '-y',
      '-i',
      source,
      '-map',
      '0:v:0',
      '-map',
      '0:a?',
      '-vf',
      scale,
      '-c:v',
      'libx264',
      '-preset',
      'medium',
      '-crf',
      '26',
      '-pix_fmt',
      'yuv420p',
      '-c:a',
      'aac',
      '-b:a',
      '96k',
      '-movflags',
      '+faststart',
      output,
    ],
    { maxBuffer: 32 * 1024 * 1024 },
  )

  if (result.status !== 0) {
    const message = result.stderr?.toString().trim()
    console.warn(`[designs] No se pudo optimizar ${source}${message ? `: ${message}` : ''}`)
    return false
  }

  return true
}

async function cleanStaleFiles(directory, expectedNames) {
  const entries = await fs.readdir(directory, { withFileTypes: true }).catch(() => [])
  await Promise.all(
    entries.map(async (entry) => {
      if (!entry.isFile()) return
      if (expectedNames.has(entry.name)) return
      await fs.rm(path.join(directory, entry.name), { force: true })
    }),
  )
}

async function main() {
  if (!existsSync(SOURCE_DIR)) {
    throw new Error('No se encontró la carpeta public/Portfolio.')
  }

  await fs.mkdir(THUMB_DIR, { recursive: true })
  await fs.mkdir(VIDEO_DIR, { recursive: true })

  const files = (await walk(SOURCE_DIR)).sort((a, b) =>
    toPosix(path.relative(SOURCE_DIR, a)).localeCompare(toPosix(path.relative(SOURCE_DIR, b)), 'en', {
      numeric: true,
    }),
  )

  const entries = []
  const expectedThumbs = new Set()
  const expectedVideos = new Set()
  const usedIds = new Set()

  for (const file of files) {
    const extension = path.extname(file).toLowerCase()
    const mediaType = IMAGE_EXTENSIONS.has(extension)
      ? 'image'
      : VIDEO_EXTENSIONS.has(extension)
        ? 'video'
        : null

    if (!mediaType) continue

    const relativePath = toPosix(path.relative(SOURCE_DIR, file))
    const relativeDirectory = path.posix.dirname(relativePath)
    const folder = relativeDirectory === '.' ? '' : relativeDirectory
    const filename = path.basename(file)
    const idBase = slugify(relativePath.replace(/\.[^.]+$/, ''))
    let id = idBase
    let suffix = 2
    while (usedIds.has(id)) {
      id = `${idBase}-${suffix}`
      suffix += 1
    }
    usedIds.add(id)

    const key = `${idBase}-${crypto.createHash('sha1').update(relativePath).digest('hex').slice(0, 8)}`
    const thumbName = mediaType === 'video' ? `${key}-poster-v4.webp` : `${key}-thumb.webp`
    const thumbPath = path.join(THUMB_DIR, thumbName)
    const videoName = `${key}-${VIDEO_MAX_HEIGHT}p-v${VIDEO_VERSION}.mp4`
    const videoPath = path.join(VIDEO_DIR, videoName)

    const metadata = mediaType === 'image' ? await readImageMetadata(file) : readVideoMetadata(file)
    const width = metadata.width
    const height = metadata.height

    let hasThumb = false
    if (mediaType === 'image') {
      hasThumb = await createImageThumbnail(file, thumbPath)
    } else {
      hasThumb = await createVideoPoster(file, thumbPath, metadata.duration)
    }

    let hasOptimizedVideo = false
    if (mediaType === 'video') {
      hasOptimizedVideo = await createOptimizedVideo(file, videoPath, width, height)
    }

    if (hasThumb) expectedThumbs.add(thumbName)
    if (hasOptimizedVideo) expectedVideos.add(videoName)

    entries.push({
      id,
      name: prettyName(filename),
      relativePath,
      folder,
      filename,
      mediaType,
      width,
      height,
      thumbPath: hasThumb ? thumbPath : null,
      optimizedVideoUrl: hasOptimizedVideo ? `/designs/videos/${videoName}` : null,
      publicUrl: encodePublicPath(relativePath),
      key,
    })

    const dimensions = width && height ? `${width}x${height}` : 'dimensiones desconocidas'
    console.log(`[designs] ${relativePath} · ${mediaType} · ${dimensions}`)
  }

  await cleanStaleFiles(THUMB_DIR, expectedThumbs)
  await cleanStaleFiles(VIDEO_DIR, expectedVideos)

  const imports = []
  const serializedEntries = entries.map((entry) => {
    const importName = `thumb_${entry.key.replace(/[^a-zA-Z0-9_]/g, '_')}`
    let thumbImport = ''

    if (entry.thumbPath) {
      const relativeImport = toPosix(path.relative(path.join(ROOT, 'src'), entry.thumbPath))
      imports.push(`import ${importName} from '@/${relativeImport}'`)
      thumbImport = importName
    }

    const properties = [
      `    id: ${JSON.stringify(entry.id)},`,
      `    name: ${JSON.stringify(entry.name)},`,
      `    relativePath: ${JSON.stringify(entry.relativePath)},`,
      `    folder: ${JSON.stringify(entry.folder)},`,
      `    filename: ${JSON.stringify(entry.filename)},`,
      `    mediaType: ${JSON.stringify(entry.mediaType)},`,
      `    width: ${entry.width},`,
      `    height: ${entry.height},`,
      `    publicUrl: ${JSON.stringify(entry.publicUrl)},`,
    ]

    if (thumbImport) properties.push(`    thumb: ${thumbImport},`)
    if (entry.mediaType === 'video' && thumbImport) properties.push(`    poster: ${thumbImport},`)
    if (entry.optimizedVideoUrl) {
      properties.push(`    optimizedVideoUrl: ${JSON.stringify(entry.optimizedVideoUrl)},`)
    }

    return `  {\n${properties.join('\n')}\n  },`
  })

  const catalog = `import type { ImageMetadata } from 'astro'

${imports.length ? `${imports.join('\n')}\n\n` : ''}export interface GeneratedDesign {
  id: string
  name: string
  relativePath: string
  folder: string
  filename: string
  mediaType: 'image' | 'video'
  width: number
  height: number
  publicUrl: string
  thumb?: ImageMetadata
  poster?: ImageMetadata
  optimizedVideoUrl?: string
}

export const generatedDesigns: GeneratedDesign[] = [
${serializedEntries.join('\n')}
]
`

  const currentCatalog = await fs.readFile(CATALOG_FILE, 'utf8').catch(() => '')
  if (currentCatalog !== catalog) {
    await fs.writeFile(CATALOG_FILE, catalog, 'utf8')
  }

  const imageCount = entries.filter((entry) => entry.mediaType === 'image').length
  const videoCount = entries.filter((entry) => entry.mediaType === 'video').length
  console.log(
    `[designs] Catálogo listo: ${entries.length} piezas (${imageCount} imágenes, ${videoCount} videos).`,
  )

  if (!hasFfmpeg) {
    console.warn('[designs] ffmpeg no está disponible: no se generarán pósters ni videos optimizados.')
  }
  if (!hasFfprobe) {
    console.warn('[designs] ffprobe no está disponible: los videos quedarán sin dimensiones detectadas.')
  }
}

main().catch((error) => {
  console.error(`[designs] ${error.message}`)
  process.exitCode = 1
})
