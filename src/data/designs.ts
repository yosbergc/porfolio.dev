import type { LocalizedText } from './projects'

export type DesignCategory =
  | 'branding'
  | 'flyers'
  | 'social'
  | 'advertising'
  | 'editorial'
  | 'other'

export interface DesignOverride {
  title?: LocalizedText
  description?: LocalizedText
  alt?: LocalizedText
  category?: DesignCategory
  year?: string
  order?: number
  hidden?: boolean
  featured?: boolean
  width?: number
  height?: number
}

export const designOverrides: Record<string, DesignOverride> = {
  'Amor a primera moridda.png': {
    title: {
      en: 'Love at first bite — bacon-wrapped jalapeño',
      es: 'Amor a primera mordida — jalapeño con tocino',
    },
  },
  'aztecamexican2.png': {
    title: {
      en: 'A drink and nothing more — Azteca Mexican Restaurant',
      es: 'Un trago y nada más — Azteca Mexican Restaurant',
    },
  },
  'BAJARDEPESO.png': {
    title: {
      en: 'Losing weight is in your hands',
      es: 'Bajar de peso está en tus manos',
    },
  },
  'CaliforniaBurritoIphone.png': {
    title: {
      en: 'California Burrito + Cheese Dip: the new duo',
      es: 'California Burrito + Cheese Dip: el nuevo dúo',
    },
  },
  'Carrousel/Artboard 1.png': {
    title: {
      en: '3 viral posts for October',
      es: '3 posts virales para octubre',
    },
  },
  'Carrousel/Artboard 2.png': {
    title: {
      en: 'Let your product take flight on Halloween',
      es: 'Pon a volar tu producto en Halloween',
    },
  },
  'Carrousel/Artboard 3.png': {
    title: {
      en: 'The trick-or-treat basket',
      es: 'La canasta de dulce o truco',
    },
  },
  'Carrousel/Artboard 4.png': {
    title: {
      en: 'The mysterious, compromising photo',
      es: 'La foto misteriosa comprometedora',
    },
  },
  'Carrousel/Artboard 5.png': {
    title: {
      en: 'Need more useful content?',
      es: '¿Necesitas más contenido útil?',
    },
  },
  'Flyer - Screen - Motion Restaurant.mp4': {
    title: {
      en: 'Super Delicious Burger — 45% off',
      es: 'Super Delicious Burger — 45% de descuento',
    },
  },
  'Menu Vertical 9-16 pizza.png': {
    title: {
      en: 'Pepperoni Pizza — vertical menu',
      es: 'Pepperoni Pizza — menú vertical',
    },
  },
  'Menu-Restaurant 16-9 Burger.png': {
    title: {
      en: 'Restaurant menu: burgers, chicken & shakes',
      es: 'Menú de restaurante: burgers, chicken y shakes',
    },
  },
  'michitaco.png': {
    title: {
      en: 'Michitaco: would you still love me?',
      es: 'Michitaco: ¿me seguirías queriendo?',
    },
  },
  'Motion Graphics - 9-16.mp4': {
    title: {
      en: 'Cashea — motion graphics concept',
      es: 'Cashea — concepto de motion graphics',
    },
  },
  'Motion Graphics 2 - 9-16 .mp4': {
    title: {
      en: 'Automate your social media',
      es: 'Automatiza tus redes sociales',
    },
  },
  'NACHOS.png': {
    title: {
      en: 'Nachos: do you have a problem?',
      es: 'Nachos: ¿tienes un problema?',
    },
  },
  'tequila_sunrise.png': {
    title: {
      en: 'Tequila Sunrise — a sunrise in your glass',
      es: 'Tequila Sunrise — un amanecer en tu copa',
    },
  },
}
