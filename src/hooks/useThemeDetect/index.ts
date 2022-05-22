import { useEffect, useLayoutEffect } from 'react'
import { useExampleTheme } from 'store/exampleTheme'

export const useThemeDetect = () => {
  const {
    isPrefersColorSchemeDark,
    isPrefersColorScheme,
    isDarkMode,
    setIsPrefersColorSchemeDark,
    setChangeTheme,
    setIsPrefersColorScheme
  } = useExampleTheme()

  useEffect(() => {
    isPrefersColorScheme && setIsPrefersColorSchemeDark()
  }, [isPrefersColorScheme, setIsPrefersColorSchemeDark])

  const prefersColorScheme = isPrefersColorSchemeDark ? 'dark' : 'light'
  const theme = isDarkMode ? 'dark' : 'light'

  const selectedTheme: string = isPrefersColorScheme
    ? prefersColorScheme
    : theme

  const showThemeToSelect = selectedTheme === 'dark' ? 'light' : 'dark'

  useLayoutEffect(() => {
    document.body.dataset.theme = selectedTheme
  }, [selectedTheme])

  const setTheme = () => {
    setIsPrefersColorScheme()

    if (isPrefersColorSchemeDark && isPrefersColorScheme) return

    return setChangeTheme()
  }

  return { setTheme, showThemeToSelect }
}
