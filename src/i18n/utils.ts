import { defaultLang, ui, type Lang, type UIKey } from './ui'

export function getLangFromUrl(url: URL): Lang {
  return url.pathname === '/es' || url.pathname.startsWith('/es/') ? 'es' : defaultLang
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key]
  }
}

export function homePath(lang: Lang): string {
  return lang === 'es' ? '/es/' : '/'
}

export const collectionSegment = {
  en: 'work',
  es: 'proyectos',
} as const

export function casePath(lang: Lang, slug: string): string {
  return lang === 'es' ? `/es/proyectos/${slug}/` : `/work/${slug}/`
}

export function designPath(lang: Lang): string {
  return lang === 'es' ? '/es/diseno/' : '/design/'
}

export function freebiePath(lang: Lang, slug?: string): string {
  const base = lang === 'es' ? '/es/freebies/' : '/freebies/'
  return slug ? `${base}${slug}/` : base
}

export function sectionHref(lang: Lang, section: string): string {
  return `${homePath(lang)}#${section}`
}

export function switchLangPath(pathname: string, target: Lang): string {
  const caseMatch = pathname.match(/^\/(?:en\/)?(?:work|proyectos)\/([^/]+)\/?$/)
  const esCaseMatch = pathname.match(/^\/es\/proyectos\/([^/]+)\/?$/)
  const freebieMatch = pathname.match(/^\/(?:es\/)?freebies(?:\/([^/]+))?\/?$/)
  const isDesign = pathname === '/design' || pathname === '/design/' || pathname === '/es/diseno' || pathname === '/es/diseno/'

  if (isDesign) return designPath(target)
  if (freebieMatch) return freebiePath(target, freebieMatch[1])
  if (esCaseMatch) return casePath(target, esCaseMatch[1])
  if (caseMatch) return casePath(target, caseMatch[1])

  return homePath(target)
}

export function alternatePaths(slug?: string): Record<Lang, string> {
  if (!slug) {
    return { en: homePath('en'), es: homePath('es') }
  }
  return { en: casePath('en', slug), es: casePath('es', slug) }
}

export function designAlternates(): Record<Lang, string> {
  return { en: designPath('en'), es: designPath('es') }
}

export function freebieAlternates(slug?: string): Record<Lang, string> {
  return { en: freebiePath('en', slug), es: freebiePath('es', slug) }
}
