import { FC } from 'react'
//
import { Templates, Organisms } from '@/components'

export const HomePage: FC = () => {
  return (
    <Templates.GenericTemplate
      globalHeader={<Organisms.GlobalHeader state={{ currentPage: 'HOME' }} />}
      globalFooter={<Organisms.GlobalFooter />}
      OverlayMenu={<Organisms.OverlayMenu />}
    >
      <p>Welcome to Next.js!</p>
    </Templates.GenericTemplate>
  )
}
