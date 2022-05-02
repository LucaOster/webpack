import { useEffect, useState } from 'react'
import T from 'theme'
import { useWindowSizeType } from './types'

export const getWindowSize = () => {
  const minWidth = (size: number) =>
    window.matchMedia(`(min-width: ${size}px)`).matches
  return {
    sm: minWidth(T.windowSizes.sm),
    md: minWidth(T.windowSizes.md),
    lg: minWidth(T.windowSizes.lg)
  }
}

export const useRenderingByWindowSize = () => {
  const [windowSize, setWindowSize] = useState<useWindowSizeType>(
    getWindowSize()
  )

  useEffect(() => {
    const changeWindowSize = () => {
      setWindowSize(getWindowSize())
    }

    window.addEventListener('resize', changeWindowSize)
    return () => window.removeEventListener('resize', changeWindowSize)
  }, [])

  return { windowSize }
}
