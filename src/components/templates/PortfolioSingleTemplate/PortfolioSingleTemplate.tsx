import { FC, Fragment } from 'react'

//  Interface

export type PortfolioSingleTemplateProps = {
  globalHeader?: React.ReactNode
  globalFooter?: React.ReactNode
  OverlayMenu?: React.ReactNode
  hero?: React.ReactNode
  sidebar: React.ReactNode
  children?: React.ReactNode
}

// Presenter

export const PortfolioSingleTemplate: FC<PortfolioSingleTemplateProps> = ({
  globalHeader,
  globalFooter,
  OverlayMenu,
  hero,
  children,
  sidebar
}) => {
  return (
    <Fragment>
      <div>{globalHeader}</div>
      {OverlayMenu}
      <div className="bg-gray-100">
        {hero}
        <div className="container px-8 pt-8 pb-12 mx-auto ld:max-w-3xl lg:flex lg:flex-row lg:gap-x-6 lg:justify-between lg:max-w-5xl">
          <div className="lg:w-3/4">
            <main className="p-6 bg-white rounded-md shadow-sm">{children}</main>
          </div>
          <div className="mt-6 lg:mt-0 lg:w-1/4">
            <aside>{sidebar}</aside>
          </div>
        </div>
      </div>
      <div>{globalFooter}</div>
    </Fragment>
  )
}
