import { spawnSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_DIR = path.join(ROOT, 'public', 'Portfolio')
const SYNC_SCRIPT = path.join(ROOT, 'scripts', 'sync-designs.mjs')

export function designWatcher() {
  return {
    name: 'design-catalog-watcher',
    hooks: {
      'astro:server:setup': ({ server }) => {
        const sourceDirectory = path.resolve(SOURCE_DIR)
        server.watcher.add(sourceDirectory)

        let timer = null
        const sync = () => {
          if (timer) clearTimeout(timer)
          timer = setTimeout(() => {
            const result = spawnSync(process.execPath, [SYNC_SCRIPT], { stdio: 'inherit' })
            if (result.status === 0) {
              server.ws.send({ type: 'full-reload' })
            }
          }, 250)
        }

        const isSourceFile = (file) => {
          const resolved = path.resolve(file)
          return resolved === sourceDirectory || resolved.startsWith(`${sourceDirectory}${path.sep}`)
        }

        server.watcher.on('add', (file) => {
          if (isSourceFile(file)) sync()
        })
        server.watcher.on('change', (file) => {
          if (isSourceFile(file)) sync()
        })
        server.watcher.on('unlink', (file) => {
          if (isSourceFile(file)) sync()
        })
      },
    },
  }
}
