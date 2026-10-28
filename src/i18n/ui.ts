export const languages = {
  en: 'English',
  es: 'Español',
} as const

export type Lang = keyof typeof languages

export const defaultLang: Lang = 'en'

const en = {
  'site.name': 'Yosber Guerrero',
  'site.role': 'Full Stack Developer & Graphic Designer',
  'site.title': 'Yosber Guerrero — Full Stack Developer & Graphic Designer',
  'site.description':
    'Full stack developer and graphic designer with 5+ years of experience building clear, fast and accessible web products, visual identities and campaign content.',
  'site.ogAlt': 'Yosber Guerrero — Full Stack Developer & Graphic Designer',

  'nav.label': 'Primary navigation',
  'nav.work': 'Work',
  'nav.design': 'Design',
  'nav.approach': 'Approach',
  'nav.experience': 'Experience',
  'nav.about': 'About',
  'nav.contact': 'Contact',
  'nav.menu': 'Open menu',
  'nav.close': 'Close menu',
  'nav.home': 'Home',
  'nav.skip': 'Skip to main content',

  'theme.label': 'Toggle color theme',
  'theme.light': 'Switch to light theme',
  'theme.dark': 'Switch to dark theme',

  'lang.label': 'Language',
  'lang.en': 'English',
  'lang.es': 'Español',
  'lang.switchTo': 'Switch language to',

  'hero.availability': 'Available for select projects',
  'hero.location': 'Venezuela · Working globally',
  'hero.titleBefore': 'Full stack developer and',
  'hero.titleAccent': 'graphic designer',
  'hero.titleAfter': 'building clear, fast products.',
  'hero.description':
    'Five years building end-to-end web products and the visual systems around them. I work with teams and clients across the US and beyond — from brand and interface to the code that ships.',
  'hero.ctaWork': 'See software work',
  'hero.ctaDesign': 'Explore graphic design',
  'hero.ctaContact': 'Let’s talk',
  'hero.portraitAlt': 'Portrait of Yosber Guerrero',
  'hero.portraitCaption': 'Yosber Guerrero · Developer & graphic designer',
  'hero.stat1Value': '5+',
  'hero.stat1Label': 'Years building for the web',
  'hero.stat2Value': '6',
  'hero.stat2Label': 'Selected client & product projects',
  'hero.stat3Value': '2',
  'hero.stat3Label': 'Languages: Spanish & English',
  'hero.stackLabel': 'Daily toolkit',

  'work.eyebrow': 'Selected work',
  'work.title': 'Products and sites built to be used.',
  'work.description':
    'A mix of agency work, client websites and product experiences. Every link goes to the live site; every technology claim is backed by public signals or the project context.',
  'work.selected': 'Selected projects',
  'work.caseStudy': 'Read case study',
  'work.visit': 'Visit live site',
  'work.verified': 'Verified stack',
  'work.otherTitle': 'Experiments & open source',
  'work.otherDescription':
    'Smaller tools and side projects I keep shipping — preserved from the original portfolio.',
  'work.code': 'Code',
  'work.live': 'Live demo',
  'work.featured': 'Featured',
  'work.openNewTab': 'opens in a new tab',

  'approach.eyebrow': 'Approach',
  'approach.title': 'Clarity first. Craft always.',
  'approach.description':
    'I don’t start with a framework. I start with the problem, the content and the person on the other side of the screen. Then I build the simplest system that can carry it.',
  'approach.card1Title': 'Understand before building',
  'approach.card1Text':
    'Who is this for? What decision should it make easier? I map the content and the journey before choosing components or writing code.',
  'approach.card2Title': 'Design with real constraints',
  'approach.card2Text':
    'Typography, spacing and motion earn their place. I work with real copy, real images and a small set of reusable patterns instead of decorative one-offs.',
  'approach.card3Title': 'Build for the long run',
  'approach.card3Text':
    'Semantic HTML, resilient layouts and content that can change without rewriting the page. Performance and SEO are part of the build, not a cleanup phase.',
  'approach.card4Title': 'Ship for everyone',
  'approach.card4Text':
    'Keyboard access, visible focus, sufficient contrast and reduced-motion support are baseline requirements. If it only works with a mouse, it is not finished.',

  'experience.eyebrow': 'Experience',
  'experience.title': 'Five years shipping. Still learning.',
  'experience.description':
    'From WordPress builds to product interfaces, I’ve worked across agencies, e-commerce and SaaS. These are the roles that shaped how I work today.',
  'experience.current': 'Current',
  'experience.visit': 'View company',

  'capabilities.eyebrow': 'Capabilities',
  'capabilities.title': 'A toolkit for the whole interface.',
  'capabilities.description':
    'I’m strongest at the intersection of design and implementation: turning a visual direction into a fast, accessible, maintainable product.',
  'capabilities.coreLabel': 'Core stack',
  'capabilities.coreText': 'Frameworks and languages I use most days.',
  'capabilities.toolsLabel': 'Also comfortable with',
  'capabilities.toolsText': 'Backend, content and commerce tools I’ve shipped with.',
  'capabilities.craftLabel': 'Craft',
  'capabilities.craftText': 'The details that decide whether a site feels good.',
  'capabilities.note':
    'No claims beyond tools used in the roles, projects and repository documented here.',

  'about.eyebrow': 'About',
  'about.title': 'Curiosity first, then code.',
  'about.p1':
    'I’m Yosber Guerrero — Emmanuel to people who know me. I started programming five years ago, but technology has been a constant obsession since I was a child.',
  'about.p2':
    'Some of the work I’m proudest of is close to home: small tools that make life easier for people around me. I also share what I learn with a programming community of almost 3K people on Instagram.',
  'about.p3':
    'Outside work, I build web and desktop applications in my free time, study interfaces and keep improving the parts users never notice: speed, accessibility and structure.',
  'about.valuesLabel': 'What I care about',
  'about.value1Title': 'Clarity',
  'about.value1Text': 'If the interface needs an explanation, it needs another pass.',
  'about.value2Title': 'Craft',
  'about.value2Text': 'The last ten percent — spacing, states, copy — is the product.',
  'about.value3Title': 'Access',
  'about.value3Text': 'A beautiful site that excludes people is not well designed.',
  'about.value4Title': 'Durability',
  'about.value4Text': 'Code should still make sense when the next person opens it.',
  'about.cta': 'Connect on LinkedIn',
  'about.portraitAlt': 'Yosber Guerrero outdoors',
  'about.portraitCaption': 'Based in Venezuela. Available for remote work.',

  'contact.eyebrow': 'Contact',
  'contact.title': 'Have a product to ship?',
  'contact.description':
    'Tell me what you’re building, who it’s for and where you’re stuck. I’m open to full stack roles, product work, design projects and selected client collaborations.',
  'contact.emailCta': 'Start a conversation',
  'contact.linkedinCta': 'Connect on LinkedIn',
  'contact.location': 'Venezuela · Working remotely',
  'contact.availability': 'Open to remote opportunities',

  'footer.tagline': 'Full stack developer, graphic designer & programming content creator.',
  'footer.nav': 'Navigate',
  'footer.connect': 'Connect',
  'footer.credit':
    'Design and code by Yosber Guerrero. Original portfolio structure inspired by midudev.',
  'footer.backTop': 'Back to top',
  'footer.rights': 'All rights reserved.',

  'case.back': 'Back to work',
  'case.overview': 'Overview',
  'case.challenge': 'The challenge',
  'case.approach': 'What I built',
  'case.research': 'Research notes',
  'case.limitations': 'What I couldn’t verify',
  'case.scope': 'Scope',
  'case.stack': 'Verified stack',
  'case.services': 'Services & focus',
  'case.role': 'Role',
  'case.category': 'Category',
  'case.location': 'Location',
  'case.website': 'Website',
  'case.visit': 'Visit live site',
  'case.next': 'Next project',
  'case.all': 'All work',
  'case.capture': 'Real capture of the live site.',
  'case.contextLabel': 'Project context',
  'case.verifiedLabel': 'Public signal',
  'case.details': 'Project details',
  'case.inThisProject': 'In this project',
  'case.moreWork': 'More work',

  'design.eyebrow': 'Graphic design',
  'design.title': 'Design that carries the message.',
  'design.description':
    'Brand, campaign and social content where typography, composition and clarity do the work. Every piece below is shown complete, without crops.',
  'design.pageTitle': 'Graphic Design — Yosber Guerrero',
  'design.pageDescription':
    'Selected graphic design work by Yosber Guerrero: brand, campaign, social media and motion pieces.',
  'design.teaserEyebrow': 'Graphic design',
  'design.teaserTitle': 'Visual systems, campaigns and content.',
  'design.teaserDescription':
    'A selection of graphic and motion design work. Open any piece to see it complete.',
  'design.viewAll': 'View full design portfolio',
  'design.backToWork': 'See software work',
  'design.filtersLabel': 'Filter designs',
  'design.filter.formatLabel': 'Format',
  'design.filter.categoryLabel': 'Type of work',
  'design.filter.all': 'All',
  'design.filter.vertical': 'Vertical',
  'design.filter.horizontal': 'Horizontal',
  'design.filter.other': 'Other formats',
  'design.category.branding': 'Branding',
  'design.category.flyers': 'Flyers',
  'design.category.social': 'Social media',
  'design.category.advertising': 'Advertising',
  'design.category.editorial': 'Editorial',
  'design.category.other': 'Other',
  'design.media.video': 'Motion',
  'design.media.image': 'Design',
  'design.viewPiece': 'View design',
  'design.showing': 'Showing {shown} of {total} pieces',
  'design.loadMore': 'Load more',
  'design.empty': 'No designs match this filter.',
  'design.lightbox.label': 'Design preview',
  'design.lightbox.close': 'Close preview',
  'design.lightbox.prev': 'Previous design',
  'design.lightbox.next': 'Next design',
  'design.lightbox.original': 'Open original file',
  'design.lightbox.loading': 'Loading full image…',

  'notfound.title': 'This page took a wrong turn.',
  'notfound.description':
    'The page you’re looking for doesn’t exist or has moved. The work is still here.',
  'notfound.home': 'Back to home',
  'notfound.work': 'Browse selected work',
} as const

export type UIKey = keyof typeof en

const es: Record<UIKey, string> = {
  'site.name': 'Yosber Guerrero',
  'site.role': 'Desarrollador Full Stack y Diseñador Gráfico',
  'site.title': 'Yosber Guerrero — Desarrollador Full Stack y Diseñador Gráfico',
  'site.description':
    'Desarrollador full stack y diseñador gráfico con más de 5 años de experiencia creando productos web claros, rápidos y accesibles, identidades visuales y contenido de campaña.',
  'site.ogAlt': 'Yosber Guerrero — Desarrollador Full Stack y Diseñador Gráfico',

  'nav.label': 'Navegación principal',
  'nav.work': 'Proyectos',
  'nav.design': 'Diseño',
  'nav.approach': 'Enfoque',
  'nav.experience': 'Experiencia',
  'nav.about': 'Sobre mí',
  'nav.contact': 'Contacto',
  'nav.menu': 'Abrir menú',
  'nav.close': 'Cerrar menú',
  'nav.home': 'Inicio',
  'nav.skip': 'Saltar al contenido principal',

  'theme.label': 'Cambiar tema de color',
  'theme.light': 'Cambiar al tema claro',
  'theme.dark': 'Cambiar al tema oscuro',

  'lang.label': 'Idioma',
  'lang.en': 'English',
  'lang.es': 'Español',
  'lang.switchTo': 'Cambiar idioma a',

  'hero.availability': 'Disponible para proyectos selectos',
  'hero.location': 'Venezuela · Trabajo global',
  'hero.titleBefore': 'Desarrollador full stack y',
  'hero.titleAccent': 'diseñador gráfico',
  'hero.titleAfter': 'creando productos claros y rápidos.',
  'hero.description':
    'Cinco años construyendo productos web de punta a punta y los sistemas visuales que los acompañan. Trabajo con equipos y clientes en Estados Unidos y más allá: desde la marca y la interfaz hasta el código que sale a producción.',
  'hero.ctaWork': 'Ver proyectos de software',
  'hero.ctaDesign': 'Explorar diseño gráfico',
  'hero.ctaContact': 'Hablemos',
  'hero.portraitAlt': 'Retrato de Yosber Guerrero',
  'hero.portraitCaption': 'Yosber Guerrero · Desarrollador y diseñador gráfico',
  'hero.stat1Value': '5+',
  'hero.stat1Label': 'Años construyendo para la web',
  'hero.stat2Value': '6',
  'hero.stat2Label': 'Proyectos de clientes y producto',
  'hero.stat3Value': '2',
  'hero.stat3Label': 'Idiomas: español e inglés',
  'hero.stackLabel': 'Stack diario',

  'work.eyebrow': 'Trabajo seleccionado',
  'work.title': 'Productos y sitios hechos para usarse.',
  'work.description':
    'Una mezcla de trabajo de agencia, sitios de clientes y experiencias de producto. Cada enlace lleva al sitio real; cada tecnología mencionada está respaldada por señales públicas o por el contexto del proyecto.',
  'work.selected': 'Proyectos seleccionados',
  'work.caseStudy': 'Ver caso de estudio',
  'work.visit': 'Visitar sitio',
  'work.verified': 'Stack verificado',
  'work.otherTitle': 'Experimentos y open source',
  'work.otherDescription':
    'Herramientas y proyectos paralelos que sigo publicando, conservados del portafolio original.',
  'work.code': 'Código',
  'work.live': 'Demo',
  'work.featured': 'Destacado',
  'work.openNewTab': 'se abre en una pestaña nueva',

  'approach.eyebrow': 'Enfoque',
  'approach.title': 'Primero la claridad. Siempre el oficio.',
  'approach.description':
    'No empiezo por el framework. Empiezo por el problema, el contenido y la persona al otro lado de la pantalla. Después construyo el sistema más simple que pueda sostenerlo.',
  'approach.card1Title': 'Entender antes de construir',
  'approach.card1Text':
    '¿Para quién es? ¿Qué decisión debe facilitar? Organizo el contenido y el recorrido antes de elegir componentes o escribir código.',
  'approach.card2Title': 'Diseñar con restricciones reales',
  'approach.card2Text':
    'La tipografía, el espacio y el movimiento se ganan su lugar. Trabajo con texto real, imágenes reales y patrones reutilizables en lugar de efectos aislados.',
  'approach.card3Title': 'Construir para durar',
  'approach.card3Text':
    'HTML semántico, layouts resilientes y contenido que puede cambiar sin reescribir la página. El rendimiento y el SEO son parte del build, no una fase de limpieza.',
  'approach.card4Title': 'Publicar para todos',
  'approach.card4Text':
    'Acceso por teclado, foco visible, contraste suficiente y respeto por reduced-motion son requisitos base. Si solo funciona con mouse, no está terminado.',

  'experience.eyebrow': 'Experiencia',
  'experience.title': 'Cinco años publicando. Sigo aprendiendo.',
  'experience.description':
    'Desde sitios en WordPress hasta interfaces de producto, he trabajado en agencias, e-commerce y SaaS. Estos son los roles que formaron mi forma de trabajar.',
  'experience.current': 'Actualidad',
  'experience.visit': 'Ver empresa',

  'capabilities.eyebrow': 'Capacidades',
  'capabilities.title': 'Un toolkit para toda la interfaz.',
  'capabilities.description':
    'Soy más fuerte en la intersección entre diseño e implementación: convertir una dirección visual en un producto rápido, accesible y mantenible.',
  'capabilities.coreLabel': 'Stack principal',
  'capabilities.coreText': 'Frameworks y lenguajes que uso casi todos los días.',
  'capabilities.toolsLabel': 'También cómodo con',
  'capabilities.toolsText': 'Herramientas de backend, contenido y comercio con las que he publicado.',
  'capabilities.craftLabel': 'Oficio',
  'capabilities.craftText': 'Los detalles que deciden si un sitio se siente bien.',
  'capabilities.note':
    'Sin afirmaciones más allá de las herramientas usadas en los roles, proyectos y repositorio documentados aquí.',

  'about.eyebrow': 'Sobre mí',
  'about.title': 'Primero la curiosidad, luego el código.',
  'about.p1':
    'Soy Yosber Guerrero — Emmanuel para quienes me conocen. Empecé a programar hace cinco años, pero la tecnología ha sido una obsesión constante desde niño.',
  'about.p2':
    'Parte del trabajo que más me enorgullece está cerca de casa: pequeñas herramientas que hacen la vida más fácil a quienes me rodean. También comparto lo que aprendo con una comunidad de programación de casi 3K personas en Instagram.',
  'about.p3':
    'Fuera del trabajo construyo aplicaciones web y de escritorio en mi tiempo libre, estudio interfaces y sigo mejorando lo que los usuarios no ven: velocidad, accesibilidad y estructura.',
  'about.valuesLabel': 'Lo que me importa',
  'about.value1Title': 'Claridad',
  'about.value1Text': 'Si la interfaz necesita una explicación, necesita otra pasada.',
  'about.value2Title': 'Oficio',
  'about.value2Text': 'El último diez por ciento —espaciado, estados, texto— es el producto.',
  'about.value3Title': 'Acceso',
  'about.value3Text': 'Un sitio bonito que excluye personas no está bien diseñado.',
  'about.value4Title': 'Durabilidad',
  'about.value4Text': 'El código debe seguir teniendo sentido cuando lo abra la próxima persona.',
  'about.cta': 'Conectar en LinkedIn',
  'about.portraitAlt': 'Yosber Guerrero al aire libre',
  'about.portraitCaption': 'Desde Venezuela. Disponible para trabajo remoto.',

  'contact.eyebrow': 'Contacto',
  'contact.title': '¿Tienes un producto por lanzar?',
  'contact.description':
    'Cuéntame qué estás construyendo, para quién es y dónde te trabaste. Estoy abierto a roles full stack, trabajo de producto, proyectos de diseño y colaboraciones selectas.',
  'contact.emailCta': 'Iniciar conversación',
  'contact.linkedinCta': 'Conectar en LinkedIn',
  'contact.location': 'Venezuela · Trabajo remoto',
  'contact.availability': 'Abierto a oportunidades remotas',

  'footer.tagline': 'Desarrollador full stack, diseñador gráfico y creador de contenido de programación.',
  'footer.nav': 'Navegar',
  'footer.connect': 'Conectar',
  'footer.credit':
    'Diseño y código por Yosber Guerrero. Estructura original del portafolio inspirada en midudev.',
  'footer.backTop': 'Volver arriba',
  'footer.rights': 'Todos los derechos reservados.',

  'case.back': 'Volver a proyectos',
  'case.overview': 'Resumen',
  'case.challenge': 'El reto',
  'case.approach': 'Lo que construí',
  'case.research': 'Notas de investigación',
  'case.limitations': 'Lo que no pude verificar',
  'case.scope': 'Alcance',
  'case.stack': 'Stack verificado',
  'case.services': 'Servicios y enfoque',
  'case.role': 'Rol',
  'case.category': 'Categoría',
  'case.location': 'Ubicación',
  'case.website': 'Sitio web',
  'case.visit': 'Visitar sitio',
  'case.next': 'Siguiente proyecto',
  'case.all': 'Todos los proyectos',
  'case.capture': 'Captura real del sitio en vivo.',
  'case.contextLabel': 'Contexto del proyecto',
  'case.verifiedLabel': 'Señal pública',
  'case.details': 'Detalles del proyecto',
  'case.inThisProject': 'En este proyecto',
  'case.moreWork': 'Más proyectos',

  'design.eyebrow': 'Diseño gráfico',
  'design.title': 'Diseño que sostiene el mensaje.',
  'design.description':
    'Marca, campaña y contenido para redes donde la tipografía, la composición y la claridad hacen el trabajo. Cada pieza se muestra completa, sin recortes.',
  'design.pageTitle': 'Diseño gráfico — Yosber Guerrero',
  'design.pageDescription':
    'Selección de diseño gráfico de Yosber Guerrero: marca, campaña, redes sociales y piezas en movimiento.',
  'design.teaserEyebrow': 'Diseño gráfico',
  'design.teaserTitle': 'Sistemas visuales, campañas y contenido.',
  'design.teaserDescription':
    'Una selección de diseño gráfico y en movimiento. Abre cualquier pieza para verla completa.',
  'design.viewAll': 'Ver portafolio de diseño',
  'design.backToWork': 'Ver proyectos de software',
  'design.filtersLabel': 'Filtrar diseños',
  'design.filter.formatLabel': 'Formato',
  'design.filter.categoryLabel': 'Tipo de trabajo',
  'design.filter.all': 'Todos',
  'design.filter.vertical': 'Verticales',
  'design.filter.horizontal': 'Horizontales',
  'design.filter.other': 'Otros formatos',
  'design.category.branding': 'Branding',
  'design.category.flyers': 'Flyers',
  'design.category.social': 'Redes sociales',
  'design.category.advertising': 'Publicidad',
  'design.category.editorial': 'Editorial',
  'design.category.other': 'Otros',
  'design.media.video': 'Motion',
  'design.media.image': 'Diseño',
  'design.viewPiece': 'Ver diseño',
  'design.showing': 'Mostrando {shown} de {total} piezas',
  'design.loadMore': 'Cargar más',
  'design.empty': 'No hay diseños para este filtro.',
  'design.lightbox.label': 'Vista previa del diseño',
  'design.lightbox.close': 'Cerrar vista previa',
  'design.lightbox.prev': 'Diseño anterior',
  'design.lightbox.next': 'Diseño siguiente',
  'design.lightbox.original': 'Abrir archivo original',
  'design.lightbox.loading': 'Cargando imagen completa…',

  'notfound.title': 'Esta página tomó un desvío.',
  'notfound.description':
    'La página que buscas no existe o cambió de lugar. El trabajo sigue aquí.',
  'notfound.home': 'Volver al inicio',
  'notfound.work': 'Ver proyectos',
}

export const ui = { en, es } as const
