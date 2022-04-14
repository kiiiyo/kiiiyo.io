import { FC, Fragment } from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
//
import { Pages } from '@/components'

const Hero: FC = () => {
  return (
    <div className="overflow-hidden relative py-8 bg-black">
      <div className="overflow-hidden absolute inset-0 blur-3xl">
        <div
          className="absolute opacity-50 animate-hero-bg-loop-first"
          style={{
            width: 700,
            height: 700,
            zIndex: '-3',
            left: '40%',
            top: '40%',
            background: '#50e3c2',
            borderRadius: '100%'
            //animationName: 'test'
          }}
        ></div>
        <div
          className="absolute opacity-50 animate-hero-bg-loop-second"
          style={{
            width: 600,
            height: 600,
            zIndex: '-1',
            left: '30%',
            top: '30%',
            background: '#7928ca',
            borderRadius: '100%'
            //animationName: 'test'
          }}
        ></div>
        <div
          className="absolute opacity-50 animate-hero-bg-loop-third"
          style={{
            width: 500,
            height: 500,
            zIndex: '-2',
            left: '50%',
            top: '50%',
            background: '#50e3c2',
            borderRadius: '100%'
            //animationName: 'test'
          }}
        ></div>
      </div>
      <div className="flex relative flex-row items-center p-8 mx-auto max-w-full sm:max-w-3xl md:py-16 lg:max-w-5xl">
        <span className="block mr-4 text-4xl md:text-6xl">🗂️</span>
        <h2 className="text-4xl font-bold text-white md:text-6xl">Portfolio</h2>
      </div>
    </div>
  )
}

const PortfolioCollectionPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Portfolio - Kiiiyo&#39;s.IO</title>
      </Head>
      <Pages.PortfolioCollectionPage hero={<Hero />} />
    </Fragment>
  )
}

export default PortfolioCollectionPage
