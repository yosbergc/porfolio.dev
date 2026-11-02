import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const localized = z.object({
  en: z.string(),
  es: z.string(),
})

const freebies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/freebies' }),
  schema: z.object({
    title: localized,
    description: localized,
    about: localized.optional(),
    includes: z.array(localized).default([]),
    date: z.coerce.date(),
    thumbnail: z.string().optional(),
    thumbnailFallback: z.string().optional(),
    thumbnailAlt: localized.optional(),
    ogImage: z.string().optional(),
    downloadUrl: z.string().optional(),
    format: z.string().optional(),
    duration: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    order: z.number().default(0),
  }),
})

export const collections = { freebies }
