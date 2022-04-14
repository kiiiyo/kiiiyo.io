import { FC, Fragment } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
//
import { Pages, Atoms } from '@/components'
// TODO: MDXにする
import { document } from '@/documents/teg-app'

const Hero: FC = () => {
  return (
    <div className="py-8 bg-blue-500">
      <div className="flex flex-row items-center p-8 mx-auto max-w-full sm:max-w-3xl md:py-16 lg:max-w-5xl">
        <span className="block mr-4 text-4xl md:text-6xl">📋</span>
        <h2 className="text-4xl font-bold text-white md:text-6xl">Teg App</h2>
      </div>
    </div>
  )
}

const TegAppPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>📋 Teg App - Kiiiyo&#39;s.IO</title>
      </Head>
      <Pages.PortfolioSinglePage
        hero={<Hero />}
        sidebar={
          <Fragment>
            <Link href="https://teg-app-storybook.vercel.app/">
              <a target="_blank">
                <div className="flex items-center p-4 h-full bg-white hover:bg-neutral-50 active:bg-neutral-100 rounded-md shadow-sm">
                  <div className="mr-3">
                    <Image width="32" height="32" alt="Storybook" src="/icon-storybook.svg" />
                  </div>
                  <div>
                    <h2 className="font-bold text-neutral-800">Storybook</h2>
                    <p className="text-sm text-neutral-400">Public</p>
                  </div>
                  <Atoms.Icon.ExternalLinkIcon className="ml-auto w-6 text-neutral-400" />
                </div>
              </a>
            </Link>
            <div className="mt-6">
              <div className="flex items-center p-4 h-full bg-white hover:bg-neutral-50 active:bg-neutral-100 rounded-md shadow-sm">
                <div className="mr-3">
                  <Image width="32" height="32" alt="Github" src="/icon-github.svg" />
                </div>
                <div>
                  <h2 className="font-bold text-neutral-800">Github</h2>
                  <p className="text-sm text-neutral-400">Private</p>
                </div>
              </div>
            </div>
          </Fragment>
        }
      >
        <div className="markdown">
          <ReactMarkdown>{document}</ReactMarkdown>
        </div>
      </Pages.PortfolioSinglePage>
    </Fragment>
  )
}

export default TegAppPage
