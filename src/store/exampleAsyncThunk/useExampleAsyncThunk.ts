import { useTypedDispatch, useTypedSelector } from '../useHelpers'
import { fetchRepositories } from './slice'

export const useExampleAsyncThunk = () => {
  const dispatch = useTypedDispatch()

  const exampleAsyncThunk = useTypedSelector(state => state.exampleAsyncThunk)

  const setState = {
    setFetchRepositories: (user: string) => dispatch(fetchRepositories(user))
  }

  return { exampleAsyncThunk, ...setState }
}
