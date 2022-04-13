import React, { FC } from 'react'
import Link from 'next/link'
//
import { Atoms } from '@/components'
// Interface

// Presenter

export const PortfolioSectionPresenter: FC = () => {
  return (
    <div className="bg-neutral-100">
      <section>
        <div className="py-12 px-4 mx-auto md:px-8 md:pt-16 md:pb-24 md:max-w-4xl">
          <h2 className="mb-8 text-4xl font-bold text-center text-neutral-800 md:text-left">Portfolio</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-blue-500 rounded-xl border border-gray-100 hover:border-white shadow-lg hover:shadow-xl transition">
              <div className="flex justify-between items-center py-2.5 px-5 bg-white rounded-t-lg border-b border-neutral-200">
                <div className="text-lg font-medium text-neutral-800">Teg App</div>
                <Link href="/">
                  <a>
                    <Atoms.Icon.LinkIcon className="w-5 h-5" />
                  </a>
                </Link>
              </div>
              <div className="flex justify-center items-center h-48">
                <p className="text-6xl">📋</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl border border-gray-100 hover:border-white shadow-lg hover:shadow-xl transition">
              <div className="flex justify-between items-center py-2.5 px-5 bg-white rounded-t-lg border-b border-neutral-200">
                <div className="text-lg font-medium text-neutral-800">Space UI Kit</div>
                <Link href="/portfolios/space-ui-kit">
                  <a>
                    <Atoms.Icon.LinkIcon className="w-5 h-5" />
                  </a>
                </Link>
              </div>
              <div className="flex justify-center items-center h-48">
                <p className="text-6xl">🚀</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export const PortfolioSection: FC = () => {
  return <PortfolioSectionPresenter />
}

export default PortfolioSection
