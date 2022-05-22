import { useTypedDispatch, useTypedSelector } from '../useHelpers'
import { setChangeExample } from './slice'

export const useExampleSimple = () => {
  const dispatch = useTypedDispatch()

  const state = {
    exampleSimple: useTypedSelector(state => state.exampleSimple.toggle)
  }

  const setState = {
    setChangeExample: () => dispatch(setChangeExample())
  }

  return { ...state, ...setState }
}
