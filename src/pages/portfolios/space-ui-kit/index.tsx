import { FC, Fragment } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
//
import { Pages, Atoms } from '@/components'
// TODO: MDXにする
import { document } from '@/documents/space-ui-kit'

const Hero: FC = () => {
  return (
    <div className="py-8 bg-slate-800">
      <div className="flex flex-row items-center p-8 mx-auto max-w-full sm:max-w-3xl md:py-16 lg:max-w-5xl">
        <span className="block mr-4 text-4xl md:text-6xl">🚀</span>
        <h2 className="text-4xl font-bold text-white md:text-6xl"> Space UI Kit</h2>
      </div>
    </div>
  )
}

const PortfolioSpaceUiKitPage: NextPage = () => {
  return (
    <Pages.PortfolioSinglePage
      hero={<Hero />}
      sidebar={
        <Fragment>
          <div>
            <Link href="https://space-ui-kit.vercel.app/en/">
              <a target="_blank">
                <div className="flex items-center p-4 h-full bg-white hover:bg-neutral-50 active:bg-neutral-100 rounded-md shadow-sm">
                  <div className="mr-3">
                    <div className="flex justify-center items-center w-10 h-10 bg-neutral-800 rounded-lg">
                      <Atoms.Icon.GlobeIcon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h2 className="font-bold text-neutral-800">Demo Page</h2>
                  </div>
                  <Atoms.Icon.ExternalLinkIcon className="ml-auto w-6 text-neutral-400" />
                </div>
              </a>
            </Link>
          </div>
          <div className="mt-6">
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
          </div>
        </Fragment>
      }
    >
      <div className="markdown">
        <ReactMarkdown>{document}</ReactMarkdown>
      </div>
    </Pages.PortfolioSinglePage>
  )
}

export default PortfolioSpaceUiKitPage
