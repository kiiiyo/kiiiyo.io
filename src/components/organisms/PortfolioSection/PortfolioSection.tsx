import React, { FC } from 'react'
//
import { Atoms } from '@/components'
// Interface

// Presenter

export const PortfolioSectionPresenter: FC = () => {
  return (
    <>
      <section>
        <div className="container py-12 px-4 mx-auto lg:py-24">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 lg:text-4xl lg:font-extrabold lg:leading-snug lg:text-center 2xl:px-48">
            Portfolio
          </h2>
          <p className="mb-10 text-lg font-normal text-gray-500 lg:mb-16 lg:text-xl lg:text-center xl:px-64">
            texttexttexttexttexttext
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="h-64 bg-white rounded-xl border border-gray-100 hover:border-white shadow-md hover:shadow-lg transition">
              <div className="flex justify-between items-center py-2.5 px-5 bg-gray-50 rounded-t-lg border-b border-gray-200">
                <div className="text-lg font-medium text-gray-500">aaa</div>
                <Atoms.Icon.LinkIcon className="w-5 h-5" />
              </div>
            </div>
            <div className="h-64 bg-white rounded-xl border border-gray-100 hover:border-white shadow-md hover:shadow-lg transition">
              <div className="flex justify-between items-center py-2.5 px-5 bg-gray-50 rounded-t-lg border-b border-gray-200">
                <div className="text-lg font-medium text-gray-500">aaa</div>
                <Atoms.Icon.LinkIcon className="w-5 h-5" />
              </div>
            </div>
            <div className="h-64 bg-white rounded-xl border border-gray-100 hover:border-white shadow-md hover:shadow-lg transition">
              <div className="flex justify-between items-center py-2.5 px-5 bg-gray-50 rounded-t-lg border-b border-gray-200">
                <div className="text-lg font-medium text-gray-500">aaa</div>
                <Atoms.Icon.LinkIcon className="w-5 h-5" />
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
