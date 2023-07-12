import { defineConfig } from '@pandacss/dev'
import { globalCss } from '@/styles/global.styles'

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  globalCss,

  // Where to look for your css declarations
  include: [
    './src/**/*.{ts,tsx,js,jsx,astro}',
    './pages/**/*.{ts,tsx,js,jsx,astro}',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },
  jsxFramework: 'react',

  // The output directory for your css system
  outdir: 'styled-system',
})
