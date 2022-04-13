import { FC, ReactNode } from 'react'
//
import { Templates, Organisms } from '@/components'

export type ContactPageProps = {
  hero: ReactNode
}

export const ContactPage: FC<ContactPageProps> = ({ hero, children }) => {
  return (
    <Templates.SingleTemplate
      globalHeader={<Organisms.GlobalHeader state={{ currentPage: 'CONTACT' }} />}
      globalFooter={<Organisms.GlobalFooter state={{ currentPage: 'CONTACT' }} />}
      OverlayMenu={<Organisms.OverlayMenu />}
      hero={hero}
    >
      {children}
    </Templates.SingleTemplate>
  )
}
