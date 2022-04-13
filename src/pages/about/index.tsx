import type { FC } from 'react'
import type { NextPage } from 'next'
import ReactMarkdown from 'react-markdown'
//
import { Pages } from '@/components'
//
import { document } from './document'

const Hero: FC = () => {
  return (
    <div className="py-8 bg-gray-400">
      <div className="flex flex-row items-center p-8 mx-auto max-w-full sm:max-w-3xl md:py-16 lg:max-w-5xl">
        <span className="block mr-4 text-4xl">👾</span>
        <h2 className="text-3xl font-bold text-white">About</h2>
      </div>
    </div>
  )
}

const AboutPage: NextPage = () => {
  return (
    <Pages.AboutPage hero={<Hero />}>
      <div className="markdown">
        <ReactMarkdown>{document}</ReactMarkdown>
      </div>
    </Pages.AboutPage>
  )
}

export default AboutPage
