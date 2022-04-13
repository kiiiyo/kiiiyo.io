import { FC, Fragment } from 'react'

//  Interface
export type SingleTemplateProps = {
  globalHeader?: React.ReactNode
  globalFooter?: React.ReactNode
  OverlayMenu?: React.ReactNode
  hero?: React.ReactNode
  children?: React.ReactNode
}

// Presenter
export const SingleTemplate: FC<SingleTemplateProps> = ({
  globalHeader,
  globalFooter,
  OverlayMenu,
  hero,
  children
}) => {
  return (
    <Fragment>
      <div>{globalHeader}</div>
      {OverlayMenu}
      <div className="bg-gray-100">
        {hero}
        <div className="container px-8 pt-8 pb-12 mx-auto ld:max-w-3xl lg:flex lg:flex-row lg:gap-x-6 lg:justify-between lg:max-w-5xl">
          <main className="p-6 w-full bg-white rounded-md shadow-sm">{children}</main>
        </div>
      </div>
      <div>{globalFooter}</div>
    </Fragment>
  )
}
