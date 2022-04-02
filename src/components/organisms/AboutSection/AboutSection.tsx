import React, { FC } from 'react'

// Interface

// Presenter

export const AboutSectionPresenter: FC = () => {
  return (
    <>
      <section>
        <div className="py-12 px-4 bg-gray-50">
          <div className="container py-12 mx-auto lg:py-24">
            <div className="grid grid-cols-1 gap-6 items-center lg:grid-cols-2 xl:gap-8">
              <div className="mb-5 lg:mb-0">
                <h2 className="mb-4 text-2xl font-bold text-gray-900 lg:text-4xl lg:font-extrabold lg:leading-snug">
                  About
                </h2>
                <p className="mb-6 text-lg font-normal text-gray-500 lg:mb-8 lg:text-xl">Description text</p>
                <button
                  type="button"
                  className="inline-flex items-center py-2.5 px-5 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  More
                  <svg
                    className="-mr-1 ml-2 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                {/* <figcaption className="flex items-center">
                  <img className="mr-5 w-14 h-14 rounded-full" src="https://picsum.photos/id/433/160/160" />
                  <div>
                    <div className="block text-xl font-medium text-gray-900">Name</div>
                    <div className="block text-sm font-normal text-gray-600">Description</div>
                  </div>
                </figcaption> */}
              </div>
              <div className="px-16 text-center md:px-12 lg:px-0">
                <img className="m-auto md:max-w-sm lg:max-w-lg" src="/about.svg" />
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
