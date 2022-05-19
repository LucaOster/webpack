import { useLayoutEffect } from 'react'
import { useExampleTheme } from 'store/exampleTheme'

export const useThemeDetect = () => {
  const {
    isDarkMode,
    isPrefersColorScheme,
    setChangeTheme,
    setPrefersColorScheme
  } = useExampleTheme()

  const isClientBrowser = typeof window !== 'undefined'
  const isDark: boolean =
    isClientBrowser && window.matchMedia('(prefers-color-scheme: dark)').matches

  const prefersColorScheme = isDark ? 'dark' : 'light'
  const theme = isDarkMode ? 'dark' : 'light'

  const selectedTheme: string = isPrefersColorScheme
    ? prefersColorScheme
    : theme

  const showThemeToSelect = selectedTheme === 'dark' ? 'light' : 'dark'

  useLayoutEffect(() => {
    document.body.dataset.theme = selectedTheme
  }, [selectedTheme])

  const setTheme = () => {
    setPrefersColorScheme()

    if (isDark && isPrefersColorScheme) return

    return setChangeTheme()
  }

  return { setTheme, showThemeToSelect }
}
