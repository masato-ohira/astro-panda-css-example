import { container } from '@@/styled-system/patterns'
import { Container } from '@@/styled-system/jsx'
import type { ReactNode } from 'react'

export const MyPageContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Container pt={12} pb={16} minH={'80vh'}>
      {children}
    </Container>
  )
}
