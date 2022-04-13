import { FC, ReactNode } from 'react'
//
import { Templates, Organisms } from '@/components'

// Interface
export type MenuItemType = {
  name: string
  label: string
  path: string
}

export type PortfolioSinglePageProps = {
  hero: ReactNode
  sidebar: ReactNode
}

export const PortfolioSinglePage: FC<PortfolioSinglePageProps> = ({ hero, sidebar, children }) => {
  return (
    <Templates.PortfolioSingleTemplate
      globalHeader={<Organisms.GlobalHeader state={{ currentPage: 'PORTFOLIO' }} />}
      globalFooter={<Organisms.GlobalFooter state={{ currentPage: 'PORTFOLIO' }} />}
      OverlayMenu={<Organisms.OverlayMenu />}
      hero={hero}
      sidebar={sidebar}
    >
      {children}
    </Templates.PortfolioSingleTemplate>
  )
}
