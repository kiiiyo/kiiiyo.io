import { FC } from 'react'
//
import { Templates, Organisms } from '@/components'

export const HomePage: FC = () => {
  return (
    <Templates.HomeTemplate
      globalHeader={<Organisms.GlobalHeader state={{ currentPage: 'HOME' }} />}
      globalFooter={<Organisms.GlobalFooter />}
      OverlayMenu={<Organisms.OverlayMenu />}
    >
      <Organisms.HeroSection />
    </Templates.HomeTemplate>
  )
}
