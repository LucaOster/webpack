import { useLayoutEffect } from 'react'
import { useTheme } from 'infra/store/theme/useAdapter'
import { UseThemeDetectType } from './types'

export const useThemeDetect = (): UseThemeDetectType => {
  const { isDarkMode, setTheme } = useTheme()

  const theme = isDarkMode ? 'dark' : 'light'

  useLayoutEffect(
    function changeTheme() {
      document.body.dataset.theme = theme
    },
    [theme]
  )

  return { setTheme, theme }
}
