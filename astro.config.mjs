import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import pandacss from '@pandacss/dev/astro'

import svelte from '@astrojs/svelte'
import vue from '@astrojs/vue'
// import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), svelte(), vue(), pandacss()],
  // base: '/site-maintenance',
  vite: {
    ssr: {
      // 例: 必要な場合、壊れたパッケージが SSR の処理を行うのをスキップさせます
      external: ['react-icons'],
    },
  },
})
