import { cva } from '@@/styled-system/css'
import { styled } from '@@/styled-system/jsx'

const buttonRecipe = cva({
  base: {
    cursor: 'pointer',
    rounded: 'lg',
    fontWeight: 500,
  },
  variants: {
    visual: {
      solid: { bg: 'teal.600', color: 'white' },
      outline: {
        borderWidth: '1px',
        borderColor: 'teal.600',
        color: 'teal.600',
        _hover: {
          bgColor: 'teal.600',
          color: 'white',
        },
      },
    },
    size: {
      sm: { py: 1, px: 2, fontSize: 'sm' },
      md: { py: 2, px: 4, fontSize: 'md' },
      lg: { py: 3, px: 6, fontSize: 'lg' },
    },
  },
  defaultVariants: {
    visual: 'solid',
    size: 'md',
  },
})

export const MyButton = styled('button', buttonRecipe)
