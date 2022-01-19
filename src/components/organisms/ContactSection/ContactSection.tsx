import React, { FC } from 'react'

// Interface

// Presenter

export const ContactSectionPresenter: FC = () => {
  return (
    <>
      <section>
        <div className="px-4 py-8 lg:pt-24 pb-36 lg:pb-48 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="font-bold lg:font-extrabold text-2xl lg:text-4xl lg:leading-snug text-gray-900 lg:text-center 2xl:px-48 mb-4">
              Contact
            </h2>
            <p className="text-gray-500 font-normal lg:text-center text-lg lg:text-xl xl:px-64 mb-10 lg:mb-16">
              texttexttexttexttexttext
            </p>
            <div>aaa</div>
          </div>
        </div>
      </section>
    </>
  )
}

export const ContactSection: FC = () => {
  return <ContactSectionPresenter />
}

export default ContactSection
