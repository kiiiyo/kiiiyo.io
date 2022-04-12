import { FC } from 'react'
//
import { Templates, Organisms } from '@/components'

export const NotFoundPage: FC = () => {
  return (
    <Templates.GenericTemplate
      globalHeader={<Organisms.GlobalHeader state={{ currentPage: 'NOT_FOUND' }} />}
      globalFooter={<Organisms.GlobalFooter state={{ currentPage: 'NOT_FOUND' }} />}
      OverlayMenu={<Organisms.OverlayMenu />}
    >
      <p>NotFoundPage</p>
    </Templates.GenericTemplate>
  )
}
