import { useTypedDispatch, useTypedSelector } from '../useHelpers'
import {
  setChangeTheme,
  setIsPrefersColorScheme,
  setIsPrefersColorSchemeDark
} from './slice'

export const useTheme = () => {
  const dispatch = useTypedDispatch()

  const state = {
    isPrefersColorSchemeDark: useTypedSelector(
      state => state.theme.isPrefersColorSchemeDark
    ),
    isPrefersColorScheme: useTypedSelector(
      state => state.theme.isPrefersColorScheme
    ),
    isDarkMode: useTypedSelector(state => state.theme.isDark)
  }

  const setState = {
    setIsPrefersColorSchemeDark: () => dispatch(setIsPrefersColorSchemeDark()),
    setChangeTheme: () => dispatch(setChangeTheme()),
    setIsPrefersColorScheme: () => dispatch(setIsPrefersColorScheme())
  }

  return { ...state, ...setState }
}
