import { FC } from 'react'
//
import { Templates, Organisms } from '@/components'

export const PortfolioCollectionPage: FC = () => {
  return (
    <Templates.GenericTemplate
      globalHeader={<Organisms.GlobalHeader state={{ currentPage: 'PORTFOLIO' }} />}
      globalFooter={<Organisms.GlobalFooter />}
      OverlayMenu={<Organisms.OverlayMenu />}
    >
      <p>PortfolioCollectionPage</p>
    </Templates.GenericTemplate>
  )
}
