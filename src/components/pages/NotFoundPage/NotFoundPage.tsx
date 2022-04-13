import { FC, ReactNode } from 'react'
//
import { Templates, Organisms } from '@/components'

export type NotFoundPageProps = {
  hero: ReactNode
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ hero, children }) => {
  return (
    <Templates.SingleTemplate
      globalHeader={<Organisms.GlobalHeader state={{ currentPage: 'NOT_FOUND' }} />}
      globalFooter={<Organisms.GlobalFooter state={{ currentPage: 'NOT_FOUND' }} />}
      OverlayMenu={<Organisms.OverlayMenu />}
      hero={hero}
    >
      {children}
    </Templates.SingleTemplate>
  )
}
