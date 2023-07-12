import { container } from '@@/styled-system/patterns'
import type { ReactNode } from 'react'

export const MyPageContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={container({
        pt: 12,
        pb: 16,
        minH: '80vh',
      })}
    >
      {children}
    </div>
  )
}
