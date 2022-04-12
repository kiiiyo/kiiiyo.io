import { FC } from 'react'
//
import { Templates, Organisms } from '@/components'

export const ContactPage: FC = () => {
  return (
    <Templates.GenericTemplate
      globalHeader={<Organisms.GlobalHeader state={{ currentPage: 'CONTACT' }} />}
      globalFooter={<Organisms.GlobalFooter state={{ currentPage: 'CONTACT' }} />}
      OverlayMenu={<Organisms.OverlayMenu />}
    >
      <p>ContactPage</p>
    </Templates.GenericTemplate>
  )
}
