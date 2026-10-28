import type { APIRoute } from 'astro'
import { projects } from '@/data/projects'
import { SITE } from '@/data/site'
import { casePath, designAlternates, designPath, homePath } from '@/i18n/utils'
import type { Lang } from '@/i18n/ui'

export const prerender = true

const languages: Lang[] = ['en', 'es']

function urlEntry(path: string, alternates: Record<Lang, string>): string {
  return `<url>
  <loc>${new URL(path, SITE.url).href}</loc>
  <xhtml:link rel="alternate" hreflang="en" href="${new URL(alternates.en, SITE.url).href}" />
  <xhtml:link rel="alternate" hreflang="es" href="${new URL(alternates.es, SITE.url).href}" />
  <xhtml:link rel="alternate" hreflang="x-default" href="${new URL(alternates.en, SITE.url).href}" />
</url>`
}

export const GET: APIRoute = () => {
  const entries: string[] = []

  for (const lang of languages) {
    entries.push(urlEntry(homePath(lang), { en: homePath('en'), es: homePath('es') }))
  }

  for (const lang of languages) {
    entries.push(urlEntry(designPath(lang), designAlternates()))
  }

  for (const project of projects) {
    for (const lang of languages) {
      entries.push(
        urlEntry(casePath(lang, project.slug), {
          en: casePath('en', project.slug),
          es: casePath('es', project.slug),
        }),
      )
    }
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>`

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
