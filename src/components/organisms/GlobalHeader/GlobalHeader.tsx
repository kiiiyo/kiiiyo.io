import React, { FC } from 'react'
import Link from 'next/link'
//
import { GLOBAL_MENU_LIST } from '@/constants'
import { Hooks, Context } from '@/features'
import { Atoms } from '@/components'

// Interface

export type MenuItemType = {
  name: string
  label: string
  path: string
}

export type CurrentPage = 'HOME' | 'ABOUT' | 'PORTFOLIO' | 'CONTACT' | '404'

export type GlobalHeaderProps = {
  state: {
    currentPage: CurrentPage
  }
}

export type GlobalHeaderPresenterProps = GlobalHeaderProps & {
  state: {
    isMobile: Boolean
    overlayMenuDisplay: Context.AppContext.OverlayMenuDisplayType
  }
  actions: {
    onMenuButtonClick: (condition: Context.AppContext.OverlayMenuDisplayType) => void
  }
}

// Presenter

export const GlobalHeaderPresenter: FC<GlobalHeaderPresenterProps> = ({
  state: { isMobile, overlayMenuDisplay, currentPage },
  actions: { onMenuButtonClick }
}) => {
  return (
    <>
      <nav className="bg-white shadow">
        <div className="container flex flex-wrap justify-between items-center mx-auto py-2.5 px-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="text-2xl font-bold text-gray-800 lg:text-3xl hover:text-gray-700 ">Brand</a>
            </Link>
          </div>

          {isMobile && (
            <>
              <button
                type="button"
                onClick={() => {
                  onMenuButtonClick('SHOW')
                }}
              >
                <Atoms.Icon.MenuIcon className="h-8" />
              </button>
            </>
          )}

          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              {GLOBAL_MENU_LIST.map((menuItem: MenuItemType, index: number) => {
                const isCurrent = menuItem.name === currentPage
                return (
                  <li key={index}>
                    <Link href={menuItem.path}>
                      <a className={`block py-2 pr-4 pl-3 text-gray-700 ${isCurrent ? 'font-bold' : ''}`}>
                        {menuItem.label}
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export const GlobalHeader: FC<GlobalHeaderProps> = ({ state: { currentPage } }) => {
  const {
    state: { overlayMenuDisplay, isMobile },
    actions: { handleOverlayMenuDisplay }
  } = Hooks.App.useAppContext()

  return (
    <GlobalHeaderPresenter
      state={{
        currentPage,
        isMobile,
        overlayMenuDisplay
      }}
      actions={{
        onMenuButtonClick: handleOverlayMenuDisplay
      }}
    />
  )
}

export default GlobalHeader
