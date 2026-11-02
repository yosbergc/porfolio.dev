import { getCollection, type CollectionEntry } from 'astro:content'

import type { Lang } from '@/i18n/ui'

export type FreebieEntry = CollectionEntry<'freebies'>

export async function getFreebies(): Promise<FreebieEntry[]> {
  const entries = await getCollection(
    'freebies',
    ({ id, data }) => !id.startsWith('_') && !data.draft,
  )

  return entries.sort((a, b) => {
    if (a.data.order !== b.data.order) return a.data.order - b.data.order
    return b.data.date.getTime() - a.data.date.getTime()
  })
}

export function hasFreebieDownload(entry: FreebieEntry): boolean {
  return Boolean(entry.data.downloadUrl?.trim())
}

export function freebieThumbnailAlt(entry: FreebieEntry, locale: Lang): string {
  return entry.data.thumbnailAlt?.[locale] ?? entry.data.title[locale]
}

export function formatFreebieDate(date: Date, locale: Lang): string {
  return new Intl.DateTimeFormat(locale === 'es' ? 'es-ES' : 'en-US', {
    month: 'short',
    year: 'numeric',
  }).format(date)
}
