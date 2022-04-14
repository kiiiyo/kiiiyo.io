import { Fragment } from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'

//
import { Pages } from '@/components'

const HomePage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Home - Kiiiyo&#39;s.IO</title>
      </Head>
      <Pages.HomePage />
    </Fragment>
  )
}

export default HomePage
