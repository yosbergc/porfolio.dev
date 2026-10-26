/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        'surface-2': 'rgb(var(--surface-2) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        'accent-ink': 'rgb(var(--accent-ink) / <alpha-value>)',
        'accent-soft': 'rgb(var(--accent-soft) / <alpha-value>)',
        sage: 'rgb(var(--sage) / <alpha-value>)',
      },
      fontFamily: {
        sans: [
          '"Onest Variable"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
        display: [
          '"Onest Variable"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
        serif: [
          '"Iowan Old Style"',
          '"Palatino Linotype"',
          'Palatino',
          'Georgia',
          'serif',
        ],
      },
      boxShadow: {
        soft: '0 1px 2px rgb(0 0 0 / 0.03), 0 30px 60px -45px rgb(0 0 0 / 0.35)',
        lift: '0 2px 4px rgb(0 0 0 / 0.04), 0 36px 70px -40px rgb(0 0 0 / 0.42)',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
