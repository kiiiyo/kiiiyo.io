import { FC, ReactNode } from 'react'
//
import { Templates, Organisms } from '@/components'

export type PortfolioCollectionPageProps = {
  hero: ReactNode
}

export const PortfolioCollectionPage: FC<PortfolioCollectionPageProps> = ({ hero }) => {
  return (
    <Templates.GenericTemplate
      globalHeader={<Organisms.GlobalHeader state={{ currentPage: 'PORTFOLIO' }} />}
      globalFooter={<Organisms.GlobalFooter state={{ currentPage: 'PORTFOLIO' }} />}
      OverlayMenu={<Organisms.OverlayMenu />}
      hero={hero}
    >
      <Organisms.PortfolioSection />
    </Templates.GenericTemplate>
  )
}
