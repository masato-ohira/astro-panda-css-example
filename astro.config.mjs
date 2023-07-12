import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import pandacss from '@pandacss/dev/astro'

import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx(), pandacss()],
  // base: '/site-maintenance',
})
