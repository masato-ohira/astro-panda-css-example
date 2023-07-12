import MarkdownIt from 'markdown-it'
import { Box, BoxProps } from '@@/styled-system/jsx'
import { defineStyles } from '@pandacss/dev'

const mdOptions: MarkdownIt.Options = {
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
}
const md = new MarkdownIt(mdOptions)

interface MdProps extends BoxProps {
  children?: string
}

export const MyMarkdown = (props: MdProps) => {
  const { children, ...rest } = props
  const html: string = md.render(children || '')
  return (
    <>
      <Box {...rest} dangerouslySetInnerHTML={{ __html: html }}></Box>
    </>
  )
}
