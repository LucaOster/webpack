import { useTypedDispatch, useTypedSelector } from '../useHelpers'
import { setIsLoading } from './slice'

export const useExampleLoading = () => {
  const dispatch = useTypedDispatch()

  const state = {
    isLoading: useTypedSelector(state => state.exampleLoading.isLoading)
  }

  const setState = {
    setIsLoading: () => dispatch(setIsLoading())
  }

  return { ...state, ...setState }
}
