import { FC } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
//
import { Pages, Atoms } from '@/components'

const Hero: FC = () => {
  return (
    <div className="py-8 bg-slate-800">
      <div className="flex flex-row items-center p-8 mx-auto max-w-full sm:max-w-3xl md:py-16 lg:max-w-5xl">
        <span className="block mr-4 text-4xl">🚀</span>
        <h2 className="text-3xl font-bold text-white"> Space UI Kit</h2>
      </div>
    </div>
  )
}

const PortfolioSpaceUiKitPage: NextPage = () => {
  return (
    <Pages.PortfolioSinglePage
      hero={<Hero />}
      sidebar={
        <>
          <Link href="https://github.com/kiiiyo/space-ui-kit">
            <a target="_blank">
              <div className="flex items-center p-4 h-full bg-white hover:bg-neutral-50 active:bg-neutral-100 rounded-md shadow-sm">
                <div className="mr-3">
                  <Image width="32" height="32" alt="Github" src="/icon-github.svg" />
                </div>
                <div>
                  <h2 className="font-bold text-neutral-800">Github</h2>
                  <p className="text-sm text-neutral-400">Public</p>
                </div>
                <Atoms.Icon.ExternalLinkIcon className="ml-auto w-6 text-neutral-400" />
              </div>
            </a>
          </Link>
        </>
      }
    >
      メイン
    </Pages.PortfolioSinglePage>
  )
}

export default PortfolioSpaceUiKitPage
