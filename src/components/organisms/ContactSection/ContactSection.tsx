import React, { FC } from 'react'

// Interface

// Presenter

export const ContactSectionPresenter: FC = ({ children }) => {
  return (
    <>
      <section>
        <div className="py-12 px-4 bg-gray-50 md:py-24">
          <div className="container mx-auto">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 lg:text-4xl lg:font-extrabold lg:leading-snug lg:text-center 2xl:px-48">
              Contact
            </h2>
            <p className="mb-10 text-lg font-normal text-gray-500 lg:mb-16 lg:text-xl lg:text-center xl:px-64">
              texttexttexttexttexttext
            </p>
            {children}
          </div>
        </div>
      </section>
    </>
  )
}

export const ContactSection: FC = ({ children }) => {
  return <ContactSectionPresenter>{children}</ContactSectionPresenter>
}

export default ContactSection
