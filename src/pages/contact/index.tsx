import type { FC } from 'react'
import type { NextPage } from 'next'
//
import { Pages } from '@/components'
//

const Hero: FC = () => {
  return (
    <div className="py-8 bg-gray-400">
      <div className="flex flex-row items-center p-8 mx-auto max-w-full sm:max-w-3xl md:py-16 lg:max-w-5xl">
        <span className="block mr-4 text-4xl">📬</span>
        <h2 className="text-3xl font-bold text-white">Contact</h2>
      </div>
    </div>
  )
}

const ContactPage: NextPage = () => {
  return <Pages.ContactPage hero={<Hero />} />
}

export default ContactPage
