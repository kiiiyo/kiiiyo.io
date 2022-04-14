import { FC } from 'react'
import Link from 'next/link'
//
import { Constant } from '@/configs'
import { Hooks, Context } from '@/features'
import { Atoms } from '@/components'

// Interface
export type MenuItemType = {
  name: string
  label: string
  path: string
}

export type OverlayMenuPresenterProps = {
  state: {
    isMobile: boolean
    overlayMenuDisplay: Context.AppContext.TOverlayMenuDisplay
  }
  actions: {
    onCloseButtonClick: (condition: Context.AppContext.TOverlayMenuDisplay) => void
  }
}

// Component
export const OverlayMenuPresenter: FC<OverlayMenuPresenterProps> = ({
  state: { isMobile, overlayMenuDisplay },
  actions: { onCloseButtonClick }
}) => {
  return isMobile && overlayMenuDisplay === 'SHOW' ? (
    <div className="overflow-y-auto fixed inset-0 z-10">
      <div className="flex items-center px-4 min-h-screen bg-gray-500 transition-opacity">
        <div className="fixed top-0 left-0 py-2.5 px-4">
          <Link href="/">
            <a className="text-2xl font-bold text-white">{Constant.SITE_NAME}</a>
          </Link>
        </div>
        <div className="fixed top-0 right-0 py-2.5 px-4">
          <button
            type="button"
            onClick={() => {
              onCloseButtonClick('HIDE')
            }}
          >
            <Atoms.Icon.CloseIcon className="h-8 text-white" />
          </button>
        </div>
        <ul className="flex flex-col mt-4 md:flex-row md:mt-0 md:space-x-8 md:text-sm md:font-medium">
          {Constant.GLOBAL_MENU_LIST.map((menuItem: MenuItemType, index: number) => {
            return (
              <li key={index}>
                <Link href={menuItem.path}>
                  <a
                    onClick={() => {
                      onCloseButtonClick('HIDE')
                    }}
                    className="block py-4 text-2xl font-bold text-white"
                  >
                    {menuItem.label}
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  ) : null
}

export const OverlayMenu: FC = () => {
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
