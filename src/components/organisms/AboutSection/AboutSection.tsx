import React, { FC } from 'react'
import Image from 'next/image'

// Presenter
export const AboutSectionPresenter: FC = () => {
  return (
    <div className="py-12 bg-white">
      <section>
        <div className="px-4 mx-auto md:flex md:flex-row md:justify-between md:items-center md:px-8 md:max-w-4xl">
          <div>
            <h2 className="mb-4 text-4xl font-bold text-center text-neutral-800 md:mb-8 md:text-left">About</h2>
            <p className="text-xl leading-10 text-center text-neutral-600 md:pr-12 md:text-left">
              👋 I&#39;m Kiiiyo.
              <br />
              <b>DesignEngineer</b> / <b>ProductManager</b> from Japan.
            </p>
          </div>
          <div className="mx-auto mt-8 w-72 text-center md:mx-0 md:w-96">
            <Image layout={'responsive'} width="786" height="572" alt="Kiiiyo" src="/about.svg" />
          </div>
        </div>
      </section>
    </div>
  )
}

export const AboutSection: FC = () => {
  return <AboutSectionPresenter />
}

export default AboutSection
