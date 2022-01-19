import React, { FC } from 'react'

// Interface

// Presenter

export const AboutSectionPresenter: FC = () => {
  return (
    <>
      <section>
        <div className="px-4 py-8 lg:pt-24 pb-36 lg:pb-48 bg-gray-50">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8 items-center">
              <div className="mb-5 lg:mb-0">
                <h2 className="font-bold lg:font-extrabold text-2xl lg:text-4xl lg:leading-snug text-gray-900 mb-4">
                  About
                </h2>
                <p className="text-gray-500  font-normal text-lg lg:text-xl mb-6 lg:mb-8">Description text</p>
                <figcaption className="flex items-center">
                  <img className="mr-5 rounded-full w-14 h-14" src="https://picsum.photos/id/433/160/160" />
                  <div>
                    <div className="block text-xl font-medium text-gray-900">Name</div>
                    <div className="block text-sm font-normal text-gray-600">Description</div>
                  </div>
                </figcaption>
              </div>
              <div className="px-16 md:px-12 lg:px-0 text-center">
                <img className="m-auto max-w-xs md:max-w-sm lg:max-w-lg" src="/about.svg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const AboutSection: FC = () => {
  return <AboutSectionPresenter />
}

export default AboutSection
