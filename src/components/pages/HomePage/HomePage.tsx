import { FC } from 'react'
//
import { Templates, Organisms } from '@/components'

export const HomePage: FC = () => {
  return (
    <Templates.GenericTemplate
      globalHeader={<Organisms.GlobalHeader state={{ currentPage: 'HOME', isMobile: false }} />}
    >
      <div className="mt-6">
        <p>Welcome to Next.js!</p>
      </div>
    </Templates.GenericTemplate>
  )
}
