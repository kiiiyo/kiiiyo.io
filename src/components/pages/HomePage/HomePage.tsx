import { FC } from 'react'
//
import { Templates } from '@/components'

//export type HomePageProps = {}

export const HomePage: FC = () => {
  return (
    <Templates.GenericTemplate>
      <div className="mt-6">
        <p>Welcome to Next.js!</p>
      </div>
    </Templates.GenericTemplate>
  )
}
