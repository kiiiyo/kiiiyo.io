import { FC } from 'react'

//  Interface

export type GenericTemplateProps = {
  globalHeader?: React.ReactNode
  globalFooter?: React.ReactNode
  children?: React.ReactNode
}

// Presenter

export const GenericTemplate: FC<GenericTemplateProps> = ({ globalHeader, globalFooter, children }) => {
  return (
    <>
      <div>{globalHeader}</div>
      <div>
        <main>{children}</main>
      </div>
      <div>{globalFooter}</div>
    </>
  )
}
