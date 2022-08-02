import { useTypedDispatch, useTypedSelector } from '../useHelpers'
import { setTheme } from './slice'

export const useTheme = () => {
  const dispatch = useTypedDispatch()

  const state = {
    isDarkMode: useTypedSelector(state => state.theme.isDark)
  }

  const setState = {
    setTheme: () => dispatch(setTheme())
  }

  return { ...state, ...setState }
}
