import { FC } from 'react'

//  Interface

export type GenericTemplateProps = {
  globalHeader?: React.ReactNode
  globalFooter?: React.ReactNode
  OverlayMenu?: React.ReactNode
  children?: React.ReactNode
}

// Presenter

export const HomeTemplate: FC<GenericTemplateProps> = ({ globalHeader, globalFooter, OverlayMenu, children }) => {
  return (
    <>
      <div>{globalHeader}</div>
      {OverlayMenu}
      <main>{children}</main>
      <div>{globalFooter}</div>
    </>
  )
}
