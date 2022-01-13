import React, { FC } from 'react'
import Link from 'next/link'

// Interface

export type CurrentPage = 'HOME' | 'ABOUT'

export type GlobalHeaderProps = {
  state: {
    currentPage: CurrentPage
    isMobile: Boolean
  }
}

export type GlobalHeaderPresenterProps = GlobalHeaderProps

// Presenter

export const GlobalHeaderPresenter: FC<GlobalHeaderPresenterProps> = () => {
  return (
    <>
      <nav className="bg-white shadow">
        <div className="lg:container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/">
                <a className="text-2xl font-bold text-gray-800 lg:text-3xl hover:text-gray-700 ">Brand</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export const GlobalHeader: FC<GlobalHeaderProps> = ({ state: { currentPage } }) => {
  return (
    <GlobalHeaderPresenter
      state={{
        currentPage,
        isMobile: false
      }}
    />
  )
}

export default GlobalHeader
