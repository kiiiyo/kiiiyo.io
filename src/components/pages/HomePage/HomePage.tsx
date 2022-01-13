import { FC } from 'react'
//
import { Templates, Organisms } from '@/components'

export const HomePage: FC = () => {
  return (
    <Templates.GenericTemplate
      globalHeader={<Organisms.GlobalHeader state={{ currentPage: 'HOME', isMobile: false }} />}
      globalFooter={<Organisms.GlobalFooter />}
    >
      <p>Welcome to Next.js!</p>
    </Templates.GenericTemplate>
  )
}
