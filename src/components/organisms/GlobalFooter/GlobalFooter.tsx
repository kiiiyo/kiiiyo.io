import { FC } from 'react'
import Link from 'next/link'
//
import { Constant } from '@/configs'

// Interface
export type TMenuItem = {
  emoji: string
  name: string
  label: string
  path: string
}

export type TLinkItem = {
  label: string
  path: string
}

// TODO:
export type TCurrentPage = 'HOME' | 'ABOUT' | 'PORTFOLIO' | 'CONTACT' | 'NOT_FOUND'

export type TGlobalFooterProps = {
  state: {
    currentPage: TCurrentPage
  }
}

export type TGlobalFooterPresenterProps = {
  state: {
    currentPage: TCurrentPage
  }
}

// Container
export const GlobalFooter: FC<TGlobalFooterProps> = ({ state: { currentPage } }) => {
  return (
    <GlobalFooterPresenter
      state={{
        currentPage
      }}
    />
  )
}

// Presenter
export const GlobalFooterPresenter: FC<TGlobalFooterPresenterProps> = ({ state: { currentPage } }) => {
  return (
    <footer>
      <div className="py-8 pb-36 bg-white lg:pt-24 lg:pb-48">
        <div className="container px-8 mx-auto md:px-6">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-8">
            <div className="col-span-2">
              <div className="flex justify-between items-center">
                <Link href="/">
                  <a className="text-2xl font-bold text-neutral-800 hover:text-neutral-700 lg:text-3xl" href="#">
                    Kiiiyo&#39;s.IO
                  </a>
                </Link>
              </div>
              <p className="my-4 text-sm">Kiiiyo&#39;s.IOのポートフォリオサイトです。</p>
            </div>
            {/* */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-neutral-500">Menu</h3>
              <ul>
                {Constant.GLOBAL_MENU_LIST.map((menuItem: TMenuItem, index: number) => {
                  const isCurrent = menuItem.name === currentPage
                  return (
                    <li key={index} className="mt-6">
                      <Link href={menuItem.path}>
                        <a
                          className={` text-neutral-500 hover:text-neutral-400 active:text-neutral-600 hover:underline ${
                            isCurrent ? 'font-bold ' : ''
                          }`}
                        >
                          <span className="inline-block mr-3">{menuItem.emoji}</span>
                          <span className="inline-block">{menuItem.label}</span>
                        </a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            {/* */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-neutral-500">Links</h3>
              <ul>
                {Constant.LINK_LIST.map((linkItem: TLinkItem, index: number) => {
                  return (
                    <li key={index} className="mt-6">
                      <Link href={linkItem.path}>
                        <a target="_blank" className="font-normal text-neutral-500 hover:underline">
                          <span className="inline-block">{linkItem.label}</span>
                        </a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default GlobalFooter
