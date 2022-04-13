import React, { FC } from 'react'

// Interface

// Presenter

export const HeroSectionPresenter: FC = () => {
  return (
    <>
      <section>
        <div className="bg-black">
          <div className="mx-auto md:w-full">
            <div className="overflow-hidden relative">
              <div className="overflow-hidden absolute inset-0 blur-3xl">
                <div
                  className="absolute opacity-50 animate-hero-bg-loop-first"
                  style={{
                    width: 700,
                    height: 700,
                    zIndex: '-3',
                    left: '40%',
                    top: '40%',
                    background: '#50e3c2',
                    borderRadius: '100%'
                    //animationName: 'test'
                  }}
                ></div>
                <div
                  className="absolute opacity-50 animate-hero-bg-loop-second"
                  style={{
                    width: 600,
                    height: 600,
                    zIndex: '-1',
                    left: '30%',
                    top: '30%',
                    background: '#7928ca',
                    borderRadius: '100%'
                    //animationName: 'test'
                  }}
                ></div>
                <div
                  className="absolute opacity-50 animate-hero-bg-loop-third"
                  style={{
                    width: 500,
                    height: 500,
                    zIndex: '-2',
                    left: '50%',
                    top: '50%',
                    background: '#50e3c2',
                    borderRadius: '100%'
                    //animationName: 'test'
                  }}
                ></div>
              </div>
              <div className="flex relative flex-col justify-center items-center py-12 lg:py-24">
                <h1 className="text-6xl font-bold tracking-tight text-center text-white lg:text-8xl">Hello, world</h1>
                {/* <p className="px-36 mt-4 text-center text-white lg:mt-12">
                  TextTextTextTextTextTextTextTextTextTextTextTextText
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const HeroSection: FC = () => {
  return <HeroSectionPresenter />
}

export default HeroSection
