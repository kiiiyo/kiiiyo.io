import { FC } from 'react'

//  Interface

export type GenericTemplateProps = {
  globalHeader?: React.ReactNode
  globalFooter?: React.ReactNode
  OverlayMenu?: React.ReactNode
  hero?: React.ReactNode
  children?: React.ReactNode
}

// Presenter

export const GenericTemplate: FC<GenericTemplateProps> = ({
  globalHeader,
  globalFooter,
  OverlayMenu,
  hero,
  children
}) => {
  return (
    <>
      <div>{globalHeader}</div>
      {OverlayMenu}
      <div className="bg-gray-100">
        {hero}
        <div className="container py-6 px-4 mx-auto">
          <main>{children}</main>
        </div>
      </div>
      <div>{globalFooter}</div>
    </>
  )
}
