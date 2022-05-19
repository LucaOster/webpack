import { useTypedDispatch, useTypedSelector } from '../useHelpers'
import { setChangeTheme, setPrefersColorScheme } from './slice'

export const useExampleTheme = () => {
  const dispatch = useTypedDispatch()

  const isDarkMode = useTypedSelector(state => state.exampleTheme.isDark)
  const isPrefersColorScheme = useTypedSelector(
    state => state.exampleTheme.isPrefersColorScheme
  )

  const setState = {
    setChangeTheme: () => dispatch(setChangeTheme()),
    setPrefersColorScheme: () => dispatch(setPrefersColorScheme())
  }

  return { isDarkMode, isPrefersColorScheme, ...setState }
}
