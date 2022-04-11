import React, { FC } from 'react'
import Link from 'next/link'
//
import { Constant } from '@/configs'
import { Hooks, Context } from '@/features'
import { Atoms } from '@/components'

// Interface
export type TMenuItem = {
  name: string
  label: string
  path: string
}

// TODO:
export type TCurrentPage = 'HOME' | 'ABOUT' | 'PORTFOLIO' | 'CONTACT' | 'NOT_FOUND'

export type TGlobalHeaderProps = {
  state: {
    currentPage: TCurrentPage
  }
}

export type TGlobalHeaderPresenterProps = TGlobalHeaderProps & {
  state: {
    isMobile: boolean
    overlayMenuDisplay: Context.AppContext.TOverlayMenuDisplay
  }
  actions: {
    onMenuButtonClick: (condition: Context.AppContext.TOverlayMenuDisplay) => void
  }
}

// Container
export const GlobalHeader: FC<TGlobalHeaderProps> = ({ state: { currentPage } }) => {
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

// Presenter
export const GlobalHeaderPresenter: FC<TGlobalHeaderPresenterProps> = ({
  state: { isMobile, currentPage },
  actions: { onMenuButtonClick }
}) => {
  return (
    <>
      <nav className="bg-white shadow">
        <div className="container flex flex-wrap justify-between items-center px-4 mx-auto h-16">
          <div className="flex justify-between items-center">
            <Link href="/">
              <a className="text-xl font-bold text-gray-800 hover:text-gray-700 lg:text-2xl">{Constant.SITE_NAME}</a>
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
            <ul className="flex flex-col mt-4 md:flex-row md:mt-0 md:space-x-8 md:text-sm md:font-medium">
              {Constant.GLOBAL_MENU_LIST.map((menuItem: TMenuItem, index: number) => {
                const isCurrent = menuItem.name === currentPage
                return (
                  <li key={index} className="relative">
                    <Link href={menuItem.path}>
                      <a
                        className={`flex justify-center items-center px-2 h-16 ${
                          isCurrent
                            ? 'font-bold text-neutral-700 hover:text-neutral-800 active:text-neutral-900'
                            : 'text-neutral-500 hover:text-neutral-600 active:text-neutral-800'
                        }`}
                      >
                        {menuItem.label}
                      </a>
                    </Link>
                    {isCurrent && (
                      <div className="absolute bottom-0 w-full h-1 bg-neutral-700 hover:bg-neutral-900"></div>
                    )}
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

export default GlobalHeader
