import { useTypedDispatch, useTypedSelector } from '../useHelpers'
import { setIsLoading } from './slice'

export const useIsLoading = () => {
  const dispatch = useTypedDispatch()

  const state = {
    isLoading: useTypedSelector(state => state.isLoading)
  }

  const setState = {
    setIsLoading: () => dispatch(setIsLoading())
  }

  return { ...state, ...setState }
}
