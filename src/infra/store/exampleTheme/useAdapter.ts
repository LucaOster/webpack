import { useTypedDispatch, useTypedSelector } from '../useHelpers'
import {
  setChangeTheme,
  setIsPrefersColorScheme,
  setIsPrefersColorSchemeDark
} from './slice'

export const useExampleThemeAdapter = () => {
  const dispatch = useTypedDispatch()

  const state = {
    isPrefersColorSchemeDark: useTypedSelector(
      state => state.exampleTheme.isPrefersColorSchemeDark
    ),
    isPrefersColorScheme: useTypedSelector(
      state => state.exampleTheme.isPrefersColorScheme
    ),
    isDarkMode: useTypedSelector(state => state.exampleTheme.isDark)
  }

  const setState = {
    setIsPrefersColorSchemeDark: () => dispatch(setIsPrefersColorSchemeDark()),
    setChangeTheme: () => dispatch(setChangeTheme()),
    setIsPrefersColorScheme: () => dispatch(setIsPrefersColorScheme())
  }

  return { ...state, ...setState }
}
