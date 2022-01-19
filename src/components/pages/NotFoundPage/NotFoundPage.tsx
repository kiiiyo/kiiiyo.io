import { FC } from 'react'
//
import { Templates, Organisms } from '@/components'

export const NotFoundPage: FC = () => {
  return (
    <Templates.GenericTemplate
      globalHeader={<Organisms.GlobalHeader state={{ currentPage: '404' }} />}
      globalFooter={<Organisms.GlobalFooter />}
      OverlayMenu={<Organisms.OverlayMenu />}
    >
      <p>NotFoundPage</p>
    </Templates.GenericTemplate>
  )
}
