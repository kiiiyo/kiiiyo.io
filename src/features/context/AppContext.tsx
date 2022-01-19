import React, { FC, createContext, useState, useCallback, useEffect } from 'react'
//
import { MOBILE_BREAK_POINT_SIZE } from '@/constants'

// Interface

export type OverlayMenuDisplayType = 'SHOW' | 'HIDE'

export type State = {
  screenSize: {
    width: Number
    height: Number
  }
  isMobile: Boolean
  overlayMenuDisplay: OverlayMenuDisplayType
}

export type Actions = {
  handleOverlayMenuDisplay: (condition: OverlayMenuDisplayType) => void
}

export type AppContextValueType = {
  state: State
  actions: Actions
}

// Context

const initContextValue: AppContextValueType = {
  state: {
    overlayMenuDisplay: 'HIDE',
    screenSize: {
      width: 0,
      height: 0
    },
    isMobile: false
  },
  actions: {
    handleOverlayMenuDisplay: () => {}
  }
}

export const AppContext = createContext<AppContextValueType>(initContextValue)

// Hooks

export const useAppContext = (): AppContextValueType => {
  // State
  const [overlayMenuDisplay, setOverlayMenuDisplay] = useState<OverlayMenuDisplayType>('HIDE')

  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0
  })

  // Actions
  const handleOverlayMenuDisplay = useCallback(
    (condition) => {
      setOverlayMenuDisplay(condition)
    },
    [setOverlayMenuDisplay]
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }
      window.addEventListener('resize', handleResize)
      handleResize()
      return () => window.removeEventListener('resize', handleResize)
    } else {
      return
    }
  }, [])

  return {
    state: {
      screenSize,
      isMobile: screenSize.width <= MOBILE_BREAK_POINT_SIZE,
      overlayMenuDisplay
    },
    actions: { handleOverlayMenuDisplay }
  }
}

// Provider

export const AppContextProvider: FC = ({ children }) => {
  const { state, actions } = useAppContext()
  return <AppContext.Provider value={{ state, actions }}>{children}</AppContext.Provider>
}

export const AppContextConsumer = AppContext.Consumer

export default AppContext
