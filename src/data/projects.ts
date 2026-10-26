import type { ImageMetadata } from 'astro'

import futuraSightScreensImage from '@/assets/projects/futurasight-screens.webp'
import futuraSightImage from '@/assets/projects/futurasight.webp'
import rightAtHomeImage from '@/assets/projects/right-at-home.webp'
import aztecaWoodlawnImage from '@/assets/projects/azteca-woodlawn.webp'
import aztecaGastoniaImage from '@/assets/projects/azteca-gastonia.webp'
import aztecaSmithCornersImage from '@/assets/projects/azteca-smith-corners.webp'

export interface LocalizedText {
  en: string
  es: string
}

export interface StackItem {
  name: string
  note: LocalizedText
}

export interface Project {
  slug: string
  title: string
  category: LocalizedText
  tagline: LocalizedText
  summary: LocalizedText
  overview: LocalizedText
  challenge: LocalizedText
  approach: LocalizedText
  role: LocalizedText
  informationStatus: LocalizedText
  location: string
  services: LocalizedText[]
  scope: LocalizedText[]
  stack: StackItem[]
  verifiedSignals: string[]
  research: LocalizedText[]
  limitations: LocalizedText
  image: ImageMetadata
  imageAlt: LocalizedText
  url: string
  featured?: boolean
  layout?: 'wide' | 'standard'
}

const researchDate = {
  en: 'Public research · October 2026',
  es: 'Investigación pública · octubre de 2026',
}

export const projects: Project[] = [
  {
    slug: 'futurasight-screens',
    title: 'FuturaSight Screens',
    category: { en: 'Product · SaaS', es: 'Producto · SaaS' },
    tagline: {
      en: 'Screens that stay current, even offline.',
      es: 'Pantallas al día, incluso sin internet.',
    },
    summary: {
      en: 'A private, offline-first digital signage platform for multi-location businesses. The public experience explains how teams upload media, schedule playback by branch and keep every screen current — even when the connection drops.',
      es: 'Una plataforma privada de señalización digital con enfoque offline-first para negocios con varias sucursales. La experiencia pública explica cómo subir contenido, programar la reproducción por local y mantener cada pantalla al día, incluso si se cae la conexión.',
    },
    overview: {
      en: 'FuturaSight Screens is a private SaaS product from Futura Sight for restaurants and other multi-location businesses. The public site introduces the product, its core workflow and a manually reviewed business signup. The internal dashboard is not publicly accessible.',
      es: 'FuturaSight Screens es un producto SaaS privado de Futura Sight para restaurantes y otros negocios con varias sucursales. El sitio público presenta el producto, su flujo principal y un alta de negocio con revisión manual. El panel interno no es de acceso público.',
    },
    challenge: {
      en: 'Multi-location teams need menus, promotions and brand content synchronized across screens without sending someone to every location. Content changes constantly, staff time is limited, and connectivity cannot be taken for granted.',
      es: 'Los equipos con varias sucursales necesitan sincronizar menús, promociones y contenido de marca en todas sus pantallas sin enviar a alguien a cada local. El contenido cambia constantemente, el tiempo del personal es limitado y no se puede dar por sentada la conexión.',
    },
    approach: {
      en: 'The public experience leads with the operational promise rather than feature jargon: organize screens by location and time zone, schedule weekly playback with repeats and pauses, keep playing when the internet drops, and isolate each business’s media library. The signup path sets expectations clearly: every business is reviewed manually before activation.',
      es: 'La experiencia pública lidera con la promesa operativa en lugar de jerga técnica: organizar pantallas por local y zona horaria, programar la reproducción semanal con repeticiones y pausas, seguir reproduciendo cuando cae el internet y aislar la biblioteca de cada negocio. El alta deja claras las expectativas: cada negocio se revisa manualmente antes de activarse.',
    },
    role: {
      en: 'Full stack work on the public product experience. This case study covers the public experience only; the internal application is private.',
      es: 'Trabajo full stack en la experiencia pública del producto. Este caso cubre únicamente la experiencia pública; la aplicación interna es privada.',
    },
    informationStatus: {
      en: 'Public product experience verified · platform internals private',
      es: 'Experiencia pública verificada · interior de la plataforma privado',
    },
    location: 'Charlotte, NC · Remote',
    services: [
      { en: 'Product web experience', es: 'Experiencia web de producto' },
      { en: 'Responsive interface', es: 'Interfaz responsive' },
      { en: 'Account request flow', es: 'Flujo de solicitud de cuenta' },
      { en: 'Product messaging', es: 'Mensaje de producto' },
    ],
    scope: [
      {
        en: 'Public product landing page and value proposition',
        es: 'Landing pública del producto y propuesta de valor',
      },
      {
        en: 'Login and business signup entry points',
        es: 'Puntos de entrada de inicio de sesión y alta de negocio',
      },
      {
        en: 'Responsive presentation of screens, scheduling and offline playback',
        es: 'Presentación responsive de pantallas, programación y reproducción offline',
      },
      {
        en: 'Clear, low-friction path to request access',
        es: 'Ruta clara y de baja fricción para solicitar acceso',
      },
    ],
    stack: [
      {
        name: 'Astro',
        note: {
          en: 'Public marketing site served from the Astro asset pipeline.',
          es: 'Sitio público de marketing servido desde el pipeline de assets de Astro.',
        },
      },
      {
        name: 'Tailwind CSS',
        note: {
          en: 'Compiled utility CSS shipped with the public pages.',
          es: 'CSS utilitario compilado y servido con las páginas públicas.',
        },
      },
      {
        name: 'Cloudflare',
        note: {
          en: 'Cloudflare Insights beacon present on the public site.',
          es: 'Beacon de Cloudflare Insights presente en el sitio público.',
        },
      },
    ],
    verifiedSignals: [
      'Astro asset paths (/_astro/Layout.*.css)',
      'Tailwind CSS utility output',
      'Cloudflare Insights analytics beacon',
      'Public routes: /, /login and /registro',
      'No public pricing, dashboard or API documentation',
    ],
    research: [
      {
        en: 'The public landing page shows the product’s main surfaces: a content panel, screen and branch counts, scheduled playback and a live status.',
        es: 'La landing pública muestra las superficies principales del producto: un panel de contenido, conteos de pantallas y sucursales, programación y estado en vivo.',
      },
      {
        en: 'The four product claims visible are multi-location organization, real scheduling, offline-first playback and a private media library.',
        es: 'Las cuatro promesas visibles del producto son organización multi-sucursal, programación real, reproducción offline-first y biblioteca privada.',
      },
      {
        en: 'The signup page asks for a business name, contact name, email, password and main branch time zone. It states that access is activated after review.',
        es: 'El alta solicita nombre del negocio, nombre de contacto, correo, contraseña y zona horaria de la sucursal principal. Indica que el acceso se activa tras la revisión.',
      },
    ],
    limitations: {
      en: 'The internal dashboard, scheduling engine, storage layer, billing and backend are private and were not inspected. No performance, customer or revenue claims are made here.',
      es: 'El panel interno, el motor de programación, el almacenamiento, la facturación y el backend son privados y no fueron inspeccionados. Aquí no se afirman métricas de rendimiento, clientes o ingresos.',
    },
    image: futuraSightScreensImage,
    imageAlt: {
      en: 'FuturaSight Screens homepage with a dark product panel showing screens, branches, content and schedules.',
      es: 'Página de inicio de FuturaSight Screens con un panel oscuro que muestra pantallas, sucursales, contenido y programaciones.',
    },
    url: 'https://screens.futurasight.com/',
    featured: true,
    layout: 'wide',
  },
  {
    slug: 'futurasight',
    title: 'Futura Sight',
    category: { en: 'Agency · Web', es: 'Agencia · Web' },
    tagline: {
      en: 'An agency site that practices what it sells.',
      es: 'Un sitio de agencia que predica con el ejemplo.',
    },
    summary: {
      en: 'The bilingual home of a marketing and web studio in Charlotte. Services, selected client work, the founding team and contact paths come together in one clear, editorial experience.',
      es: 'La casa bilingüe de un estudio de marketing y web en Charlotte. Servicios, proyectos de clientes, el equipo fundador y vías de contacto se reúnen en una experiencia editorial clara.',
    },
    overview: {
      en: 'Futura Sight is a marketing and communications agency in Charlotte, North Carolina. Its site has to sell a broad offer — web development, SEO, content, advertising and video — while making the actual work easy to evaluate.',
      es: 'Futura Sight es una agencia de marketing y comunicaciones en Charlotte, Carolina del Norte. Su sitio debe vender una oferta amplia —desarrollo web, SEO, contenido, publicidad y video— y a la vez facilitar la evaluación del trabajo real.',
    },
    challenge: {
      en: 'Agencies often bury their best proof under a list of services. The challenge was to explain a multi-disciplinary offer without turning the homepage into a menu, and to give each case study enough context to be credible.',
      es: 'Las agencias suelen esconder su mejor prueba bajo una lista de servicios. El reto era explicar una oferta multidisciplinaria sin convertir la home en un menú y dar a cada caso suficiente contexto para ser creíble.',
    },
    approach: {
      en: 'An editorial homepage with a strong point of view leads into a work index, dedicated service explanations and a bilingual route structure. Case study pages connect the strategy, the services provided and the live result instead of showing a gallery without context.',
      es: 'Una home editorial con un punto de vista claro conduce a un índice de proyectos, explicaciones de servicios y una estructura bilingüe. Las páginas de caso conectan estrategia, servicios y resultado real en lugar de mostrar una galería sin contexto.',
    },
    role: {
      en: 'Full stack development for the agency site. The public site, its bilingual routes and its client case studies are live and verifiable.',
      es: 'Desarrollo full stack para el sitio de la agencia. El sitio público, sus rutas bilingües y sus casos de clientes están en vivo y son verificables.',
    },
    informationStatus: {
      en: 'Live public site verified',
      es: 'Sitio público en vivo verificado',
    },
    location: 'Charlotte, NC',
    services: [
      { en: 'Web design & development', es: 'Diseño y desarrollo web' },
      { en: 'Bilingual experience', es: 'Experiencia bilingüe' },
      { en: 'Content architecture', es: 'Arquitectura de contenido' },
      { en: 'SEO fundamentals', es: 'Fundamentos de SEO' },
    ],
    scope: [
      {
        en: 'Bilingual agency website with English and Spanish routes',
        es: 'Sitio de agencia bilingüe con rutas en inglés y español',
      },
      {
        en: 'Service, about, pricing, contact and work sections',
        es: 'Secciones de servicios, about, precios, contacto y proyectos',
      },
      {
        en: 'Case study template connecting services to client outcomes',
        es: 'Plantilla de casos que conecta servicios con resultados de clientes',
      },
      {
        en: 'Responsive, accessible layout and navigation',
        es: 'Layout y navegación responsive y accesibles',
      },
    ],
    stack: [
      {
        name: 'Astro',
        note: {
          en: 'Pages and assets are served through Astro’s build pipeline.',
          es: 'Páginas y assets se sirven mediante el pipeline de build de Astro.',
        },
      },
      {
        name: 'Tailwind CSS',
        note: {
          en: 'Compiled utility CSS used across the public site.',
          es: 'CSS utilitario compilado usado en todo el sitio público.',
        },
      },
      {
        name: 'Vanilla JavaScript',
        note: {
          en: 'Small custom scripts for navigation and page behavior.',
          es: 'Pequeños scripts propios para navegación y comportamiento de página.',
        },
      },
      {
        name: 'Vercel Analytics',
        note: {
          en: 'Vercel Analytics and Speed Insights scripts present.',
          es: 'Scripts de Vercel Analytics y Speed Insights presentes.',
        },
      },
    ],
    verifiedSignals: [
      'Astro asset pipeline (/_astro/*.css and *.js)',
      'Tailwind CSS utility output',
      'Vercel Analytics and Speed Insights',
      'Bilingual route /es/ with a language switcher',
      'Public routes: /work, /portfolio, /services, /about, /pricing, /contact',
    ],
    research: [
      {
        en: 'The work index filters projects by category and links to individual case studies with overview, services and tags.',
        es: 'El índice de proyectos filtra por categoría y enlaza a casos individuales con resumen, servicios y etiquetas.',
      },
      {
        en: 'The services page groups seven offers, from web design and SEO to social media, advertising and video production.',
        es: 'La página de servicios agrupa siete ofertas, desde diseño web y SEO hasta redes sociales, publicidad y producción de video.',
      },
      {
        en: 'The about page states the agency was founded by three entrepreneurs and serves restaurants, automotive and real estate businesses across the Carolinas.',
        es: 'La página about indica que la agencia fue fundada por tres emprendedores y atiende negocios de restaurantes, automoción e inmobiliaria en las Carolinas.',
      },
    ],
    limitations: {
      en: 'The site’s editor, deployment configuration and internal analytics account are private. This case study covers the public website and the publicly listed client work.',
      es: 'El editor del sitio, la configuración de despliegue y la cuenta interna de analítica son privados. Este caso cubre el sitio público y el trabajo de clientes listado públicamente.',
    },
    image: futuraSightImage,
    imageAlt: {
      en: 'Futura Sight homepage with a blue dithered landscape and the headline “Working with brands that are easy to use, hard to leave”.',
      es: 'Página de inicio de Futura Sight con un paisaje azul tramado y el titular “Working with brands that are easy to use, hard to leave”.',
    },
    url: 'https://futurasight.com/',
    layout: 'standard',
  },
  {
    slug: 'right-at-home-realty-team',
    title: 'Right At Home Realty Team',
    category: { en: 'Client · Real estate', es: 'Cliente · Inmobiliaria' },
    tagline: {
      en: 'Trust first, property search second.',
      es: 'Primero la confianza, luego la búsqueda.',
    },
    summary: {
      en: 'A bilingual real estate site for a family-run team serving the Carolinas. Human stories sit next to the tools buyers and sellers expect: MLS search, agent profiles, service areas, reviews, FAQs and lead forms.',
      es: 'Un sitio inmobiliario bilingüe para un equipo familiar que atiende las Carolinas. Las historias humanas conviven con las herramientas que compradores y vendedores esperan: búsqueda MLS, perfiles de agentes, áreas de servicio, reseñas, FAQs y formularios.',
    },
    overview: {
      en: 'Right At Home Realty Team works with buyers, sellers and investors across North Carolina and South Carolina. The site has to earn trust quickly, explain the team’s law-enforcement background and make property search feel like the natural next step.',
      es: 'Right At Home Realty Team trabaja con compradores, vendedores e inversionistas en Carolina del Norte y del Sur. El sitio debe ganar confianza rápido, explicar la trayectoria del equipo en seguridad y hacer que la búsqueda de propiedades se sienta como el siguiente paso natural.',
    },
    challenge: {
      en: 'Real estate visitors arrive with different questions and very little patience. The team needed one experience that could serve English- and Spanish-speaking buyers, sellers and investors across two states without hiding the listings, the agents or the contact options.',
      es: 'Quien visita un sitio inmobiliario llega con preguntas distintas y muy poca paciencia. El equipo necesitaba una experiencia que atendiera a compradores, vendedores e inversionistas en inglés y español en dos estados sin esconder las propiedades, los agentes ni las opciones de contacto.',
    },
    approach: {
      en: 'The site leads with service, protection and trust, then backs it up with real agent profiles, service-area content, Google review social proof, an FAQ and multiple contact paths. MLS search, featured listings and community areas are integrated through IDX Addons, while the English/Spanish switch keeps the whole journey available in both languages.',
      es: 'El sitio lidera con servicio, protección y confianza, y lo respalda con perfiles reales de agentes, contenido por áreas de servicio, reseñas de Google, FAQs y varias vías de contacto. La búsqueda MLS, las propiedades destacadas y las comunidades se integran mediante IDX Addons, mientras el selector inglés/español mantiene todo el recorrido en ambos idiomas.',
    },
    role: {
      en: 'Full stack development for this client project. The client site and its bilingual experience are live; this case study is based on the public implementation and the agency’s published project notes.',
      es: 'Desarrollo full stack para este proyecto de cliente. El sitio del cliente y su experiencia bilingüe están en vivo; este caso se basa en la implementación pública y en las notas publicadas por la agencia.',
    },
    informationStatus: {
      en: 'Live site and published case study verified',
      es: 'Sitio en vivo y caso publicado verificados',
    },
    location: 'North Carolina & South Carolina',
    services: [
      { en: 'Real estate website', es: 'Sitio inmobiliario' },
      { en: 'Lead generation', es: 'Generación de leads' },
      { en: 'Local SEO', es: 'SEO local' },
      { en: 'Bilingual website', es: 'Sitio bilingüe' },
      { en: 'Conversion optimization', es: 'Optimización de conversión' },
    ],
    scope: [
      {
        en: 'Bilingual homepage and team-led storytelling',
        es: 'Home bilingüe y narrativa centrada en el equipo',
      },
      {
        en: 'Agent profiles, service areas, testimonials and FAQ',
        es: 'Perfiles de agentes, áreas de servicio, testimonios y FAQ',
      },
      {
        en: 'MLS search, featured listings and community widgets',
        es: 'Búsqueda MLS, propiedades destacadas y widgets de comunidades',
      },
      {
        en: 'Contact, valuation and lead-capture paths',
        es: 'Rutas de contacto, valuación y captura de leads',
      },
    ],
    stack: [
      {
        name: 'Astro',
        note: {
          en: 'Generator metadata and Astro asset paths are present.',
          es: 'La metadata del generador y las rutas de assets de Astro están presentes.',
        },
      },
      {
        name: 'Tailwind CSS',
        note: {
          en: 'Compiled utility CSS with a custom design token layer.',
          es: 'CSS utilitario compilado con una capa propia de design tokens.',
        },
      },
      {
        name: 'IDX Addons',
        note: {
          en: 'MLS search, featured listings and community-area widgets.',
          es: 'Widgets de búsqueda MLS, propiedades destacadas y áreas comunitarias.',
        },
      },
      {
        name: 'DM Sans Variable',
        note: {
          en: 'Variable font used throughout the public site.',
          es: 'Fuente variable usada en todo el sitio público.',
        },
      },
      {
        name: 'Vercel Analytics',
        note: {
          en: 'Analytics and Speed Insights scripts present.',
          es: 'Scripts de Analytics y Speed Insights presentes.',
        },
      },
    ],
    verifiedSignals: [
      'Astro generator metadata',
      'Tailwind CSS compiled output',
      'DM Sans Variable @font-face',
      'IDX Addons omnisearch, featured and community-area scripts',
      'Vercel Analytics / Speed Insights',
      'Bilingual /es route',
    ],
    research: [
      {
        en: 'The homepage presents three agents, a 5.0 Google rating block, service areas, reviews, an FAQ and three clear actions: property search, search homes and call.',
        es: 'La home presenta tres agentes, un bloque de calificación 5.0 en Google, áreas de servicio, reseñas, FAQs y tres acciones claras: búsqueda de propiedades, buscar casas y llamar.',
      },
      {
        en: 'Property search, recently sold, blog, join and contact are separate public routes; property data is supplied through IDX widgets rather than a custom listing backend.',
        es: 'Búsqueda de propiedades, vendidas recientemente, blog, join y contacto son rutas públicas separadas; los datos de propiedades provienen de widgets IDX, no de un backend propio de listados.',
      },
      {
        en: 'The bilingual switch is present in the header and the /es route is publicly reachable.',
        es: 'El selector bilingüe está en el header y la ruta /es es accesible públicamente.',
      },
    ],
    limitations: {
      en: 'MLS data access, CRM, form handling, analytics configuration and the client’s private accounts were not inspected. No lead, traffic or sales metrics are claimed.',
      es: 'El acceso a datos MLS, el CRM, el manejo de formularios, la configuración de analítica y las cuentas privadas del cliente no fueron inspeccionados. No se afirman métricas de leads, tráfico o ventas.',
    },
    image: rightAtHomeImage,
    imageAlt: {
      en: 'Right At Home Realty Team homepage with the team portrait over a Charlotte skyline and the headline about service, protection and trust.',
      es: 'Página de inicio de Right At Home Realty Team con el retrato del equipo sobre el skyline de Charlotte y el titular sobre servicio, protección y confianza.',
    },
    url: 'https://rightathomerealtyteam.com/',
    layout: 'wide',
  },
  {
    slug: 'azteca-woodlawn',
    title: 'Azteca Woodlawn',
    category: { en: 'Client · Restaurant', es: 'Cliente · Restaurante' },
    tagline: {
      en: 'A neighborhood institution, brought online with care.',
      es: 'Una institución del barrio, llevada online con cuidado.',
    },
    summary: {
      en: 'The digital home of the oldest Azteca location in Charlotte. Built around more than 30 years of history, thousands of reviews and a menu that needed to be one tap away.',
      es: 'La casa digital de la ubicación más antigua de Azteca en Charlotte. Construida alrededor de más de 30 años de historia, miles de reseñas y un menú que debía estar a un toque.',
    },
    overview: {
      en: 'Azteca Woodlawn is the oldest and highest-rated location in the Azteca family in Charlotte. The site has to protect that legacy while doing the practical work: showing the menu, opening hours, location, reviews and a direct route to online ordering.',
      es: 'Azteca Woodlawn es la ubicación más antigua y mejor valorada de la familia Azteca en Charlotte. El sitio debe proteger ese legado y a la vez hacer el trabajo práctico: mostrar menú, horarios, ubicación, reseñas y una ruta directa al pedido en línea.',
    },
    challenge: {
      en: 'Woodlawn already had the hardest thing to earn: decades of local trust. The challenge was to translate that reputation into a fast, useful experience without flattening the restaurant’s personality or burying the things people actually came for.',
      es: 'Woodlawn ya tenía lo más difícil de ganar: décadas de confianza local. El reto era traducir esa reputación en una experiencia rápida y útil sin aplanar la personalidad del restaurante ni enterrar lo que la gente realmente busca.',
    },
    approach: {
      en: 'History and social proof come first, followed by a direct menu path, online ordering through DoorDash, hours, an embedded map and a Google review link. The Spanish-first experience has an English route, and the visual language keeps the restaurant’s color and energy without sacrificing legibility.',
      es: 'La historia y la prueba social van primero, seguidas de una ruta directa al menú, pedidos en línea mediante DoorDash, horarios, un mapa embebido y un enlace para reseñar en Google. La experiencia, con el español como base, tiene una ruta en inglés, y el lenguaje visual conserva el color y la energía del restaurante sin sacrificar legibilidad.',
    },
    role: {
      en: 'Full stack development for this client project. This case study is based on the live public site.',
      es: 'Desarrollo full stack para este proyecto de cliente. Este caso se basa en el sitio público en vivo.',
    },
    informationStatus: {
      en: 'Live site and published case study verified',
      es: 'Sitio en vivo y caso publicado verificados',
    },
    location: 'Charlotte, NC',
    services: [
      { en: 'Web design', es: 'Diseño web' },
      { en: 'Local SEO', es: 'SEO local' },
      { en: 'Social proof integration', es: 'Integración de prueba social' },
      { en: 'Restaurant marketing', es: 'Marketing para restaurantes' },
      { en: 'Online ordering', es: 'Pedidos en línea' },
    ],
    scope: [
      {
        en: 'Bilingual restaurant site with a Spanish-first experience',
        es: 'Sitio de restaurante bilingüe con experiencia base en español',
      },
      {
        en: 'Menu, online ordering, hours, location and review paths',
        es: 'Rutas de menú, pedidos, horarios, ubicación y reseñas',
      },
      {
        en: 'History, reputation and social-proof storytelling',
        es: 'Narrativa de historia, reputación y prueba social',
      },
      {
        en: 'Local SEO-oriented structure and metadata',
        es: 'Estructura y metadata orientadas a SEO local',
      },
    ],
    stack: [
      {
        name: 'Astro',
        note: {
          en: 'Generator metadata reports Astro v7.0.9 on the public site.',
          es: 'La metadata del generador reporta Astro v7.0.9 en el sitio público.',
        },
      },
      {
        name: 'Tailwind CSS',
        note: {
          en: 'Compiled utility CSS and custom font tokens.',
          es: 'CSS utilitario compilado y tokens propios de fuentes.',
        },
      },
      {
        name: 'DoorDash',
        note: {
          en: 'Online ordering links point to the restaurant’s DoorDash store.',
          es: 'Los enlaces de pedidos apuntan a la tienda DoorDash del restaurante.',
        },
      },
      {
        name: 'Google Maps Embed API',
        note: {
          en: 'Embedded map for the Woodlawn address.',
          es: 'Mapa embebido para la dirección de Woodlawn.',
        },
      },
      {
        name: 'Vercel Analytics',
        note: {
          en: 'Analytics and Speed Insights scripts present.',
          es: 'Scripts de Analytics y Speed Insights presentes.',
        },
      },
    ],
    verifiedSignals: [
      'Astro v7.0.9 generator meta',
      'Tailwind CSS compiled output',
      'DoorDash store link',
      'Google Maps Embed API iframe',
      'Vercel Analytics / Speed Insights',
      'English route /en',
    ],
    research: [
      {
        en: 'The live site claims more than 30 years of tradition, a 4.4 Google rating and 3.6K+ customer reviews. These figures come from the site and were not independently audited.',
        es: 'El sitio en vivo afirma más de 30 años de tradición, una calificación de 4.4 en Google y más de 3.6K reseñas. Estas cifras provienen del sitio y no fueron auditadas de forma independiente.',
      },
      {
        en: 'The menu, online ordering, hours, map and Google review link are all reachable from the first screen.',
        es: 'El menú, los pedidos en línea, los horarios, el mapa y el enlace de reseñas de Google son accesibles desde la primera pantalla.',
      },
      {
        en: 'The default language is Spanish, with an English route available at /en.',
        es: 'El idioma por defecto es español, con una ruta en inglés disponible en /en.',
      },
    ],
    limitations: {
      en: 'The menu content pipeline, reservations, analytics configuration and DoorDash account are not publicly visible. No traffic, order or revenue metrics are claimed.',
      es: 'El flujo de contenido del menú, las reservas, la configuración de analítica y la cuenta de DoorDash no son públicos. No se afirman métricas de tráfico, pedidos o ingresos.',
    },
    image: aztecaWoodlawnImage,
    imageAlt: {
      en: 'Azteca Woodlawn homepage at night with the restaurant mural, green opening-hours bar and the headline “Auténtica cocina mexicana”.',
      es: 'Página de inicio de Azteca Woodlawn de noche con el mural del restaurante, la barra verde de horarios y el titular “Auténtica cocina mexicana”.',
    },
    url: 'https://www.aztecawoodlawn.com/',
    layout: 'standard',
  },
  {
    slug: 'azteca-gastonia',
    title: 'Azteca Gastonia',
    category: { en: 'Client · Restaurant', es: 'Cliente · Restaurante' },
    tagline: {
      en: 'Local discovery, rewards and ordering in one flow.',
      es: 'Descubrimiento local, recompensas y pedidos en un solo flujo.',
    },
    summary: {
      en: 'A conversion-focused bilingual site for the second original Azteca restaurant, with online ordering, a VIP rewards path and local content for Gastonia diners.',
      es: 'Un sitio bilingüe enfocado en conversión para el segundo restaurante original de Azteca, con pedidos en línea, ruta de recompensas VIP y contenido local para quienes comen en Gastonia.',
    },
    overview: {
      en: 'Azteca Gastonia describes itself as the second original restaurant of the Azteca family. The site needs to help people discover the restaurant locally, order without friction and come back through a VIP rewards experience.',
      es: 'Azteca Gastonia se presenta como el segundo restaurante original de la familia Azteca. El sitio debe ayudar a descubrir el restaurante localmente, pedir sin fricción y volver mediante una experiencia de recompensas VIP.',
    },
    challenge: {
      en: 'The restaurant needed a complete local digital foundation: bilingual content, a menu that is easy to scan, a direct ordering path and a reason for first-time visitors to become regulars.',
      es: 'El restaurante necesitaba una base digital local completa: contenido bilingüe, un menú fácil de recorrer, una ruta directa de pedido y una razón para que quienes llegan por primera vez se conviertan en clientes habituales.',
    },
    approach: {
      en: 'The site pairs a strong food-led hero with practical local information and a visible VIP club offer. Online ordering is handled through Deliverect Direct, rewards through the restaurant’s external VIP platform, and the whole experience is available in English and Spanish with local reviews and featured monthly dishes.',
      es: 'El sitio combina un hero potente centrado en la comida con información local práctica y una oferta visible del club VIP. Los pedidos se gestionan con Deliverect Direct, las recompensas mediante la plataforma externa del restaurante, y toda la experiencia está disponible en inglés y español con reseñas locales y platos destacados del mes.',
    },
    role: {
      en: 'Full stack development for this client project. This case study is based on the live public site.',
      es: 'Desarrollo full stack para este proyecto de cliente. Este caso se basa en el sitio público en vivo.',
    },
    informationStatus: {
      en: 'Live site and published case study verified',
      es: 'Sitio en vivo y caso publicado verificados',
    },
    location: 'Gastonia, NC',
    services: [
      { en: 'Web design', es: 'Diseño web' },
      { en: 'Local SEO', es: 'SEO local' },
      { en: 'Bilingual website', es: 'Sitio bilingüe' },
      { en: 'Restaurant marketing', es: 'Marketing para restaurantes' },
      { en: 'Online ordering', es: 'Pedidos en línea' },
      { en: 'Customer retention', es: 'Retención de clientes' },
    ],
    scope: [
      {
        en: 'Bilingual English/Spanish restaurant experience',
        es: 'Experiencia de restaurante bilingüe inglés/español',
      },
      {
        en: 'Online ordering via Deliverect Direct',
        es: 'Pedidos en línea vía Deliverect Direct',
      },
      {
        en: 'VIP club offer and external rewards path',
        es: 'Oferta del club VIP y ruta externa de recompensas',
      },
      {
        en: 'Monthly dishes, gallery, events, hours, location and reviews',
        es: 'Platos del mes, galería, eventos, horarios, ubicación y reseñas',
      },
    ],
    stack: [
      {
        name: 'Astro',
        note: {
          en: 'Generator metadata reports Astro v7.0.9 on the public site.',
          es: 'La metadata del generador reporta Astro v7.0.9 en el sitio público.',
        },
      },
      {
        name: 'Tailwind CSS',
        note: {
          en: 'Compiled utility CSS and custom font tokens.',
          es: 'CSS utilitario compilado y tokens propios de fuentes.',
        },
      },
      {
        name: 'Deliverect Direct',
        note: {
          en: 'External online-ordering flow linked from the site.',
          es: 'Flujo externo de pedidos en línea enlazado desde el sitio.',
        },
      },
      {
        name: 'VIP rewards platform',
        note: {
          en: 'External rewards destination for the in-house offer.',
          es: 'Destino externo de recompensas para la oferta en local.',
        },
      },
      {
        name: 'Google Maps Embed API',
        note: {
          en: 'Embedded map for the Gastonia location.',
          es: 'Mapa embebido para la ubicación de Gastonia.',
        },
      },
      {
        name: 'Vercel Analytics',
        note: {
          en: 'Analytics and Speed Insights scripts present.',
          es: 'Scripts de Analytics y Speed Insights presentes.',
        },
      },
    ],
    verifiedSignals: [
      'Astro v7.0.9 generator meta',
      'Tailwind CSS compiled output',
      'Deliverect Direct ordering URL',
      'VIP rewards URL (reward.aztecagastonia.vip)',
      'Google Maps Embed API iframe',
      'Vercel Analytics / Speed Insights',
      'Bilingual /es route',
    ],
    research: [
      {
        en: 'The VIP offer is explicit on the homepage: join the club and get 15% off one meal, with early access to discounts and events.',
        es: 'La oferta VIP es explícita en la home: unirse al club y obtener 15% de descuento en una comida, con acceso anticipado a descuentos y eventos.',
      },
      {
        en: 'The menu is organized into categories and the site surfaces monthly dishes, events, a gallery, hours and an embedded map.',
        es: 'El menú se organiza por categorías y el sitio destaca platos del mes, eventos, galería, horarios y un mapa embebido.',
      },
      {
        en: 'The English and Spanish routes are both public, and the page exposes a direct DoorDash-free ordering path through Deliverect.',
        es: 'Las rutas en inglés y español son públicas, y la página expone una ruta directa de pedido mediante Deliverect.',
      },
    ],
    limitations: {
      en: 'The VIP platform, Deliverect configuration, menu data pipeline and analytics account are external or private. No customer, order or revenue metrics are claimed.',
      es: 'La plataforma VIP, la configuración de Deliverect, el flujo de datos del menú y la cuenta de analítica son externos o privados. No se afirman métricas de clientes, pedidos o ingresos.',
    },
    image: aztecaGastoniaImage,
    imageAlt: {
      en: 'Azteca Gastonia homepage at dusk with the illuminated restaurant and the headline “Fuego. Chile. Tacos.”',
      es: 'Página de inicio de Azteca Gastonia al atardecer con el restaurante iluminado y el titular “Fuego. Chile. Tacos.”',
    },
    url: 'https://aztecagastonia.com/',
    layout: 'standard',
  },
  {
    slug: 'azteca-smith-corners',
    title: 'Azteca Smith Corners',
    category: { en: 'Client · Restaurant', es: 'Cliente · Restaurante' },
    tagline: {
      en: 'Food, culture and a reason to come back.',
      es: 'Comida, cultura y una razón para volver.',
    },
    summary: {
      en: 'A neighborhood restaurant site in Charlotte with a festival-like visual voice, event storytelling, monthly dishes and direct online ordering.',
      es: 'Un sitio de restaurante de barrio en Charlotte con una voz visual festiva, narrativa de eventos, platos del mes y pedidos en línea directos.',
    },
    overview: {
      en: 'Azteca Smith Corners is the Azteca location in the Smith Corners area of Charlotte. The site has to stand out in a crowded local market while still answering the everyday questions: menu, hours, location and ordering.',
      es: 'Azteca Smith Corners es la ubicación de Azteca en la zona de Smith Corners, Charlotte. El sitio debe destacar en un mercado local saturado y a la vez responder lo cotidiano: menú, horarios, ubicación y pedidos.',
    },
    challenge: {
      en: 'A restaurant site can be beautiful and still be useless. This one needed personality strong enough to reflect the Azteca fiesta, plus event content, monthly specials and fast paths to the menu, map and online ordering.',
      es: 'Un sitio de restaurante puede ser bonito y aun así inútil. Este necesitaba una personalidad capaz de reflejar la fiesta Azteca, además de contenido de eventos, especiales del mes y rutas rápidas al menú, el mapa y los pedidos.',
    },
    approach: {
      en: 'The experience opens with a bold, food-led hero and builds a content rhythm around seasonal events, monthly dishes, social proof and local information. Online ordering is handled through DoorDash, the map is embedded, and the Spanish-first content keeps the neighborhood voice intact.',
      es: 'La experiencia abre con un hero potente centrado en la comida y construye un ritmo de contenido alrededor de eventos de temporada, platos del mes, prueba social e información local. Los pedidos se gestionan mediante DoorDash, el mapa está embebido y el contenido base en español conserva la voz del barrio.',
    },
    role: {
      en: 'Full stack development for this client project. This case study is based on the live public site.',
      es: 'Desarrollo full stack para este proyecto de cliente. Este caso se basa en el sitio público en vivo.',
    },
    informationStatus: {
      en: 'Live site and published case study verified',
      es: 'Sitio en vivo y caso publicado verificados',
    },
    location: 'Charlotte, NC',
    services: [
      { en: 'Web design', es: 'Diseño web' },
      { en: 'Local SEO', es: 'SEO local' },
      { en: 'Restaurant marketing', es: 'Marketing para restaurantes' },
      { en: 'Online ordering', es: 'Pedidos en línea' },
      { en: 'Event storytelling', es: 'Narrativa de eventos' },
    ],
    scope: [
      {
        en: 'Spanish-first restaurant site with local Charlotte content',
        es: 'Sitio de restaurante base español con contenido local de Charlotte',
      },
      {
        en: 'Seasonal events, monthly dishes and awareness campaigns',
        es: 'Eventos de temporada, platos del mes y campañas de concientización',
      },
      {
        en: 'DoorDash ordering, menu, hours, map and reviews',
        es: 'Pedidos por DoorDash, menú, horarios, mapa y reseñas',
      },
      {
        en: 'Conversion-focused content hierarchy',
        es: 'Jerarquía de contenido enfocada en conversión',
      },
    ],
    stack: [
      {
        name: 'Astro',
        note: {
          en: 'Generator metadata reports Astro v7.0.9 on the public site.',
          es: 'La metadata del generador reporta Astro v7.0.9 en el sitio público.',
        },
      },
      {
        name: 'Tailwind CSS',
        note: {
          en: 'Compiled utility CSS and custom font tokens.',
          es: 'CSS utilitario compilado y tokens propios de fuentes.',
        },
      },
      {
        name: 'DoorDash',
        note: {
          en: 'Online ordering links point to the restaurant’s DoorDash store.',
          es: 'Los enlaces de pedidos apuntan a la tienda DoorDash del restaurante.',
        },
      },
      {
        name: 'Google Maps Embed API',
        note: {
          en: 'Embedded map for the Smith Corners address.',
          es: 'Mapa embebido para la dirección de Smith Corners.',
        },
      },
      {
        name: 'Vercel Analytics',
        note: {
          en: 'Analytics and Speed Insights scripts present.',
          es: 'Scripts de Analytics y Speed Insights presentes.',
        },
      },
    ],
    verifiedSignals: [
      'Astro v7.0.9 generator meta',
      'Tailwind CSS compiled output',
      'DoorDash store link',
      'Google Maps Embed API iframe',
      'Vercel Analytics / Speed Insights',
      'Spanish-first content with event and monthly-dish modules',
    ],
    research: [
      {
        en: 'At the time of research the homepage featured a Día de los Muertos event, a monthly dish carousel and a breast-cancer-awareness campaign.',
        es: 'En el momento de la investigación, la home destacaba un evento de Día de los Muertos, un carrusel de platos del mes y una campaña de concientización sobre el cáncer de mama.',
      },
      {
        en: 'The site leans on Google review quotes, a menu, an embedded map, hours and DoorDash ordering.',
        es: 'El sitio se apoya en reseñas de Google, un menú, un mapa embebido, horarios y pedidos por DoorDash.',
      },
      {
        en: 'The content is Spanish-first, with local references to Smith Corners and Charlotte rather than generic chain copy.',
        es: 'El contenido tiene base en español, con referencias locales a Smith Corners y Charlotte en lugar de textos genéricos de cadena.',
      },
    ],
    limitations: {
      en: 'The event calendar, menu management workflow, DoorDash account and analytics configuration are not publicly visible. Seasonal content may change after research.',
      es: 'El calendario de eventos, el flujo de gestión del menú, la cuenta de DoorDash y la configuración de analítica no son públicos. El contenido de temporada puede cambiar después de la investigación.',
    },
    image: aztecaSmithCornersImage,
    imageAlt: {
      en: 'Azteca Smith Corners homepage with the restaurant exterior and the headline “Come. Disfruta. Bebe.”',
      es: 'Página de inicio de Azteca Smith Corners con el exterior del restaurante y el titular “Come. Disfruta. Bebe.”',
    },
    url: 'https://www.aztecasmithcorners.com/',
    layout: 'standard',
  },
]

export const researchDateLabel = researchDate

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
