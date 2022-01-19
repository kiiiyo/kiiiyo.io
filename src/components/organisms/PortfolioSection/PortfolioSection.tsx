import React, { FC } from 'react'
//
import { Atoms } from '@/components'
// Interface

// Presenter

export const PortfolioSectionPresenter: FC = () => {
  return (
    <>
      <section>
        <div className="container mx-auto px-4 py-8 lg:py-24">
          <h2 className="font-bold lg:font-extrabold text-2xl lg:text-4xl lg:leading-snug text-gray-900 lg:text-center 2xl:px-48 mb-4">
            Portfolio
          </h2>
          <p className="text-gray-500 font-normal lg:text-center text-lg lg:text-xl xl:px-64 mb-10 lg:mb-16">
            texttexttexttexttexttext
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl transition border border-gray-100 hover:border-white  hover:shadow-lg bg-white h-64 shadow-md">
              <div className="bg-gray-50 rounded-t-lg py-2.5 px-5 flex justify-between items-center border-b border-gray-200">
                <div className="font-medium text-gray-500 text-lg">aaa</div>
                <Atoms.Icon.LinkIcon className="h-5 w-5" />
              </div>
            </div>
            <div className="rounded-xl transition border border-gray-100 hover:border-white  hover:shadow-lg bg-white h-64 shadow-md">
              <div className="bg-gray-50 rounded-t-lg py-2.5 px-5 flex justify-between items-center border-b border-gray-200">
                <div className="font-medium text-gray-500 text-lg">aaa</div>
                <Atoms.Icon.LinkIcon className="h-5 w-5" />
              </div>
            </div>
            <div className="rounded-xl transition border border-gray-100 hover:border-white  hover:shadow-lg bg-white h-64 shadow-md">
              <div className="bg-gray-50 rounded-t-lg py-2.5 px-5 flex justify-between items-center border-b border-gray-200">
                <div className="font-medium text-gray-500 text-lg">aaa</div>
                <Atoms.Icon.LinkIcon className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const PortfolioSection: FC = () => {
  return <PortfolioSectionPresenter />
}

export default PortfolioSection
