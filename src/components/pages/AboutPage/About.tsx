import { FC } from 'react'
//
import { Templates, Organisms } from '@/components'

export const AboutPage: FC = () => {
  return (
    <Templates.GenericTemplate
      globalHeader={<Organisms.GlobalHeader state={{ currentPage: 'ABOUT' }} />}
      globalFooter={<Organisms.GlobalFooter state={{ currentPage: 'ABOUT' }} />}
      OverlayMenu={<Organisms.OverlayMenu />}
    >
      <p>AboutPage</p>
    </Templates.GenericTemplate>
  )
}
