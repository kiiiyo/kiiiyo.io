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
      <div className="bg-gray-100">
        <div className="lg:container p-6 mx-auto">
          <main>{children}</main>
        </div>
      </div>
      <div>{globalFooter}</div>
    </>
  )
}
