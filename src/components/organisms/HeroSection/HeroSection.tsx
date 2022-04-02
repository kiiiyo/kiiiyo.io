import React, { FC } from 'react'

// Interface

// Presenter

export const HeroSectionPresenter: FC = () => {
  return (
    <>
      <section>
        <div className="bg-black">
          <div className="md:w-full mx-auto">
            <div className="relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden blur-3xl">
                <div
                  className="absolute animate-hero-bg-loop-first opacity-50"
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
                  className="absolute animate-hero-bg-loop-second opacity-50"
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
                  className="absolute animate-hero-bg-loop-third opacity-50"
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
              <div className="flex flex-col relative items-center justify-center lg:py-32 py-12">
                <h1 className="font-bold lg:text-8xl text-6xl text-center tracking-tight text-white">Hello, world</h1>
                <p className="text-white text-center lg:mt-12 mt-4 px-36">
                  TextTextTextTextTextTextTextTextTextTextTextTextText
                </p>
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
