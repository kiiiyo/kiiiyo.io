import { FC } from 'react'
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

export type OverlayMenuProps = {}

export type OverlayMenuPresenterProps = OverlayMenuProps & {
  state: {
    isMobile: Boolean
    overlayMenuDisplay: Context.AppContext.OverlayMenuDisplayType
  }
  actions: {
    onCloseButtonClick: (condition: Context.AppContext.OverlayMenuDisplayType) => void
  }
}

// Component

export const OverlayMenuPresenter: FC<OverlayMenuPresenterProps> = ({
  state: { isMobile, overlayMenuDisplay },
  actions: { onCloseButtonClick }
}) => {
  return isMobile && overlayMenuDisplay === 'SHOW' ? (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className=" min-h-screen flex items-center px-4 bg-gray-500 transition-opacity">
        <div className="fixed top-0 left-0 py-2.5 px-4">
          <Link href="/">
            <a className="text-2xl font-bold text-white">Brand</a>
          </Link>
        </div>
        <div className="fixed top-0 right-0 py-2.5 px-4">
          <button
            type="button"
            onClick={() => {
              onCloseButtonClick('HIDE')
            }}
          >
            <Atoms.Icon.CloseIcon className="text-white h-8" />
          </button>
        </div>
        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          {GLOBAL_MENU_LIST.map((menuItem: MenuItemType, index: number) => {
            return (
              <li key={index}>
                <Link href={menuItem.path}>
                  <a className="block py-4 text-2xl font-bold text-white">{menuItem.label}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  ) : null
}

export const OverlayMenu: FC<OverlayMenuProps> = () => {
  const {
    state: { overlayMenuDisplay, isMobile },
    actions: { handleOverlayMenuDisplay }
  } = Hooks.App.useAppContext()

  return (
    <OverlayMenuPresenter
      state={{
        isMobile,
        overlayMenuDisplay
      }}
      actions={{
        onCloseButtonClick: handleOverlayMenuDisplay
      }}
    />
  )
}

export default OverlayMenu
