import type { LocalizedText } from './projects'

export interface ExperienceItem {
  company: string
  title: LocalizedText
  period: LocalizedText
  description: LocalizedText
  link?: string
  current?: boolean
}

export const experience: ExperienceItem[] = [
  {
    company: 'Futura Sight',
    title: { en: 'Full Stack Developer', es: 'Desarrollador Full Stack' },
    period: { en: 'Present', es: 'Actualidad' },
    description: {
      en: 'Building bilingual marketing sites and digital products for restaurants, real estate teams and local businesses across the Carolinas, from content architecture and interfaces to production tooling.',
      es: 'Construyendo sitios de marketing bilingües y productos digitales para restaurantes, equipos inmobiliarios y negocios locales de las Carolinas, desde la arquitectura de contenido y las interfaces hasta las herramientas de producción.',
    },
    link: 'https://www.futurasight.com/',
    current: true,
  },
  {
    company: 'Blue Panther',
    title: { en: 'Frontend Developer with Next.js', es: 'Desarrollador Frontend con Next.js' },
    period: { en: 'Apr 2025 – Jun 2025', es: 'Abr 2025 – Jun 2025' },
    description: {
      en: 'Fixed bugs and implemented new features for the website and mobile app with Next.js and Expo.',
      es: 'Corregí errores e implementé nuevas funcionalidades para el sitio web y la app móvil con Next.js y Expo.',
    },
  },
  {
    company: 'SMM World',
    title: { en: 'Frontend Developer / Translator', es: 'Desarrollador Frontend / Traductor' },
    period: { en: 'Nov 2024 – Dec 2024', es: 'Nov 2024 – Dic 2024' },
    description: {
      en: 'Resolved UI visual bugs and managed website localization by translating and structuring multi-language content in JSON files.',
      es: 'Resolví errores visuales de UI y gestioné la localización del sitio traduciendo y estructurando contenido multilingüe en archivos JSON.',
    },
    link: 'https://www.smm-world.com/',
  },
  {
    company: 'BoxNCase',
    title: { en: 'Frontend Developer', es: 'Desarrollador Frontend' },
    period: { en: 'Jun 2023 – May 2024', es: 'Jun 2023 – May 2024' },
    description: {
      en: 'Redesigned the home experience, added product filtering and improved site performance.',
      es: 'Rediseñé la experiencia de inicio, añadí filtros de productos y mejoré el rendimiento del sitio.',
    },
    link: 'https://www.boxncase.com/',
  },
  {
    company: 'Bitterroot Valley Marketing',
    title: { en: 'PHP Frontend Developer / React Developer', es: 'Desarrollador Frontend PHP / React' },
    period: { en: 'Dec 2022 – Mar 2023', es: 'Dic 2022 – Mar 2023' },
    description: {
      en: 'Designed and built websites from scratch for WordPress CMS and single-page applications with React.',
      es: 'Diseñé y construí sitios desde cero para WordPress y aplicaciones de una sola página con React.',
    },
  },
  {
    company: 'Volume99',
    title: { en: 'WordPress Developer', es: 'Desarrollador WordPress' },
    period: { en: 'Feb 2019 – Jan 2021', es: 'Feb 2019 – Ene 2021' },
    description: {
      en: 'Designed and built the marketing agency’s website on WordPress and optimized it for SEO.',
      es: 'Diseñé y construí el sitio de la agencia de marketing en WordPress y lo optimicé para SEO.',
    },
    link: 'https://web.archive.org/web/20240415014826/https://volume99.com/',
  },
]
