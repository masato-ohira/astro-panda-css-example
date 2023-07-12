import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  'html, body': {
    color: 'gray.900',
    lineHeight: '1.7',
  },

  '.markdown-body': {
    h2: {
      fontSize: '2xl',
      color: 'teal.600',
      fontWeight: 'bold',
      mb: 4,
      '&:not(:first-child)': {
        mt: 6,
      },
    },
  },
})
