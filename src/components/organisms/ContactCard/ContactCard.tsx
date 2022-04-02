import React, { FC } from 'react'
//
import { Atoms } from '@/components'
import {
  classnames,
  position,
  height,
  margin,
  backgroundImage,
  gradientColorStops,
  borderRadius,
  padding,
  width,
  backgroundColor,
  display,
  flexDirection,
  alignItems
} from 'tailwindcss-classnames'

// styles

const rootStyle = classnames(
  position('relative'),
  width('w-full', 'md:w-10/12', 'lg:w-3/5'),
  margin('my-2', 'mx-auto'),
  backgroundImage('bg-gradient-to-r'),
  gradientColorStops('from-cyan-500', 'to-blue-500'),
  borderRadius('rounded-2xl'),
  padding('p-1')
)

const innerStyle = classnames(
  position('relative'),
  width('w-full'),
  height('h-full'),
  position('relative'),
  backgroundColor('bg-white'),
  borderRadius('rounded-2xl'),
  padding('py-12')
)

const profileStyle = classnames(display('flex'), flexDirection('flex-col'), alignItems('items-center'))
//const profileImageStyle = classnames(width('w-28'), height('h-28'), borderRadius('rounded-full'), margin('mb-3'))

// Presenter

export const ContactCardPresenter: FC = () => {
  return (
    <section>
      <div
        className={`${rootStyle} after:content-[''] after:block after:absolute after:w-10 after:h-10 bg-white rounded-full top-0 left-0`}
      >
        <div className={innerStyle}>
          <div className={profileStyle}>
            <img className="w-28 h-28 rounded-full" src="https://picsum.photos/id/433/160/160" />

            <h3 className="mt-2 mb-1 text-xl font-medium text-gray-900">Bonnie Green</h3>
            <span className="text-sm text-gray-500">Design Engineer</span>
          </div>
          <div className="justify-center items-center px-6 mt-12 space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a className="flex justify-center items-center px-4 w-full text-white bg-gray-800 hover:bg-gray-700 rounded-lg focus:ring-4 focus:ring-gray-300 sm:w-auto">
              <Atoms.Icon.TwitterIcon className="mr-2" />
              <div className="py-4 text-left">
                <div className="text-sm font-semibold">Twitter</div>
              </div>
            </a>

            <a className="flex justify-center items-center px-4 w-full text-white bg-gray-800 hover:bg-gray-700 rounded-lg focus:ring-4 focus:ring-gray-300 sm:w-auto">
              <Atoms.Icon.FacebookIcon className="mr-2" />
              <div className="py-4 text-left">
                <div className="text-sm font-semibold">Facebook</div>
              </div>
            </a>

            <a className="flex justify-center items-center px-4 w-full text-white bg-gray-800 hover:bg-gray-700 rounded-lg focus:ring-4 focus:ring-gray-300 sm:w-auto">
              <Atoms.Icon.LinkedinIcon className="mr-2" />
              <div className="py-4 text-left">
                <div className="text-sm font-semibold">Linkedin</div>
              </div>
            </a>

            <a className="flex justify-center items-center px-4 w-full text-white bg-gray-800 hover:bg-gray-700 rounded-lg focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-700 sm:w-auto">
              <img className="mr-1 w-8 h-8" src="logo-wantedly-white.svg" />
              <div className="py-4 text-left">
                <div className="text-sm font-semibold">Wantedly</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export const ContactCard: FC = () => {
  return <ContactCardPresenter />
}

export default ContactCard
