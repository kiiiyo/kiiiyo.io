import { FC, ReactNode } from 'react'
//
import { Templates, Organisms } from '@/components'

export type AboutPageProps = {
  hero: ReactNode
}

export const AboutPage: FC<AboutPageProps> = ({ hero, children }) => {
  return (
    <Templates.SingleTemplate
      globalHeader={<Organisms.GlobalHeader state={{ currentPage: 'ABOUT' }} />}
      globalFooter={<Organisms.GlobalFooter state={{ currentPage: 'ABOUT' }} />}
      OverlayMenu={<Organisms.OverlayMenu />}
      hero={hero}
    >
      {children}
    </Templates.SingleTemplate>
  )
}
