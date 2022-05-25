import { GetClientRepositoriesStateType } from './types'
import { useTypedDispatch, useTypedSelector } from '../useHelpers'
import { setGetRepositories } from './slice'

export const useExampleAsyncSlice = () => {
  const dispatch = useTypedDispatch()

  const state = {
    exampleAsyncSlice: useTypedSelector(state => state.exampleAsync)
  }

  const setState = {
    setGetRepositories: (repositories: GetClientRepositoriesStateType) =>
      dispatch(setGetRepositories(repositories))
  }

  return { ...state, ...setState }
}
