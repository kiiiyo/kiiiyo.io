import { FC } from 'react'
//
import { Templates, Organisms } from '@/components'

export const AboutPage: FC = () => {
  return (
    <Templates.GenericTemplate
      globalHeader={<Organisms.GlobalHeader state={{ currentPage: 'ABOUT' }} />}
      globalFooter={<Organisms.GlobalFooter />}
      OverlayMenu={<Organisms.OverlayMenu />}
    >
      <p>AboutPage</p>
    </Templates.GenericTemplate>
  )
}
