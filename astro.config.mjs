import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import robotsTxt from 'astro-robots-txt'
import { designWatcher } from './scripts/design-watcher.mjs'

// https://astro.build/config
export default defineConfig({
  site: 'https://porfolio.dev',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    robotsTxt({
      sitemap: 'https://porfolio.dev/sitemap.xml',
      policy: [{ userAgent: '*', allow: '/', disallow: '/components' }],
    }),
    designWatcher(),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
})

