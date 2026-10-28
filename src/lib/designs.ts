import type { ImageMetadata } from 'astro'

import {
  designOverrides,
  type DesignCategory,
  type DesignOverride,
} from '@/data/designs'
import { generatedDesigns } from '@/data/designs.generated'
import type { LocalizedText } from '@/data/projects'

export type DesignMediaType = 'image' | 'video'
export type DesignOrientation = 'vertical' | 'horizontal' | 'square'

export interface Design {
  id: string
  name: string
  filename: string
  folder: string
  relativePath: string
  title: LocalizedText
  description: LocalizedText
  alt: LocalizedText
  category: DesignCategory
  mediaType: DesignMediaType
  width: number
  height: number
  ratio: number
  orientation: DesignOrientation
  year?: string
  order: number
  hidden: boolean
  featured: boolean
  thumb?: ImageMetadata
  poster?: ImageMetadata
  originalUrl: string
  playbackUrl: string
}

const categoryOrder: DesignCategory[] = [
  'branding',
  'flyers',
  'social',
  'advertising',
  'editorial',
  'other',
]

const imageDescription: LocalizedText = {
  en: 'Graphic design piece from the portfolio.',
  es: 'Pieza de diseño gráfico del portafolio.',
}

const videoDescription: LocalizedText = {
  en: 'Motion design piece from the portfolio.',
  es: 'Pieza de diseño en movimiento del portafolio.',
}

function resolveOverride(relativePath: string): DesignOverride {
  return designOverrides[relativePath] ?? {}
}

function orientationFromRatio(ratio: number): DesignOrientation {
  if (ratio < 0.95) return 'vertical'
  if (ratio > 1.05) return 'horizontal'
  return 'square'
}

function defaultAlt(
  title: LocalizedText,
  mediaType: DesignMediaType,
): LocalizedText {
  if (mediaType === 'video') {
    return {
      en: `${title.en} — motion design piece`,
      es: `${title.es} — pieza de diseño en movimiento`,
    }
  }

  return {
    en: `${title.en} — graphic design piece`,
    es: `${title.es} — pieza de diseño gráfico`,
  }
}

function resolveDesign(
  generated: (typeof generatedDesigns)[number],
): Design {
  const override = resolveOverride(generated.relativePath)
  const title = override.title ?? {
    en: generated.name,
    es: generated.name,
  }
  const description =
    override.description ??
    (generated.mediaType === 'video' ? videoDescription : imageDescription)

  const fallbackWidth = generated.width || 1280
  const fallbackHeight = generated.height || 720
  const width = override.width ?? fallbackWidth
  const height = override.height ?? fallbackHeight
  const ratio = height > 0 ? width / height : 1

  return {
    id: generated.id,
    name: generated.name,
    filename: generated.filename,
    folder: generated.folder,
    relativePath: generated.relativePath,
    title,
    description,
    alt: override.alt ?? defaultAlt(title, generated.mediaType),
    category: override.category ?? 'other',
    mediaType: generated.mediaType,
    width,
    height,
    ratio,
    orientation: orientationFromRatio(ratio),
    year: override.year,
    order: override.order ?? Number.MAX_SAFE_INTEGER,
    hidden: override.hidden ?? false,
    featured: override.featured ?? false,
    thumb: generated.thumb,
    poster: generated.poster,
    originalUrl: generated.publicUrl,
    playbackUrl: generated.optimizedVideoUrl ?? generated.publicUrl,
  }
}

export function getDesigns(): Design[] {
  return generatedDesigns
    .map(resolveDesign)
    .sort((a, b) => {
      if (a.order !== b.order) return a.order - b.order
      return a.relativePath.localeCompare(b.relativePath, 'en', { numeric: true })
    })
}

export function getVisibleDesigns(): Design[] {
  return getDesigns().filter((design) => !design.hidden)
}

export function getFeaturedDesigns(limit = 6): Design[] {
  const visible = getVisibleDesigns()
  const featured = visible.filter((design) => design.featured)
  const result = [...featured]

  for (const design of visible) {
    if (result.length >= limit) break
    if (!result.some((item) => item.id === design.id)) result.push(design)
  }

  return result.slice(0, limit)
}

export function getAvailableCategories(
  designs: Design[],
): Exclude<DesignCategory, 'other'>[] {
  const categories = new Set(designs.map((design) => design.category))
  return categoryOrder.filter(
    (category): category is Exclude<DesignCategory, 'other'> =>
      category !== 'other' && categories.has(category),
  )
}
