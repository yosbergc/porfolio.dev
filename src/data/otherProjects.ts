import type { LocalizedText } from './projects'

export interface OtherProject {
  title: string
  description: LocalizedText
  url: string
  code?: string
  image: string
  width: number
  height: number
  tags: string[]
}

export const otherProjects: OtherProject[] = [
  {
    title: 'Echo Toast',
    description: {
      en: 'A lightweight toast component for React and Next.js projects, published as an npm package.',
      es: 'Un componente de toast ligero para proyectos React y Next.js, publicado como paquete de npm.',
    },
    url: 'https://www.npmjs.com/package/echo-toast',
    code: 'https://github.com/yosbergc/echo-toast',
    image: '/projects/echo-toast.jpg',
    width: 1612,
    height: 947,
    tags: ['React', 'Next.js', 'npm'],
  },
  {
    title: 'Pergola Kits',
    description: {
      en: 'An SEO-focused e-commerce mockup built from scratch with Astro and Tailwind CSS, with help from Claude.',
      es: 'Un mockup de e-commerce enfocado en SEO, creado desde cero con Astro y Tailwind CSS, con ayuda de Claude.',
    },
    url: 'https://pergola-ecommerce.vercel.app/',
    image: '/projects/pergola-kits.jpg',
    width: 1904,
    height: 852,
    tags: ['Astro', 'Tailwind CSS', 'SEO'],
  },
  {
    title: 'BlackSheepSearch',
    description: {
      en: 'A SaaS that helps businesses find blog outreach opportunities. Built with Next.js, Supabase and Stripe.',
      es: 'Un SaaS que ayuda a negocios a encontrar oportunidades de colaboración con blogs. Creado con Next.js, Supabase y Stripe.',
    },
    url: 'https://www.blacksheepsearch.com/',
    image: '/projects/blacksheepsearch.jpg',
    width: 1903,
    height: 869,
    tags: ['Next.js', 'Supabase', 'Stripe'],
  },
  {
    title: 'Kyro Search',
    description: {
      en: 'A landing page that turns raw Google Search Console data into actionable SEO opportunities. Built with Next.js.',
      es: 'Una landing que convierte datos crudos de Google Search Console en oportunidades SEO accionables. Creada con Next.js.',
    },
    url: 'https://seo-tool-landing.vercel.app/',
    image: '/projects/kyrosearch.jpg',
    width: 1904,
    height: 942,
    tags: ['Next.js', 'SEO'],
  },
  {
    title: 'Google Translate Clone',
    description: {
      en: 'A fun Google Translate clone built with Next.js and Tailwind CSS.',
      es: 'Un clon divertido de Google Translate creado con Next.js y Tailwind CSS.',
    },
    url: 'https://google-translate-typescript.vercel.app/',
    code: 'https://github.com/yosbergc/google-translate-typescript',
    image: '/projects/google-translate.jpg',
    width: 1558,
    height: 575,
    tags: ['Next.js', 'Tailwind CSS'],
  },
]
