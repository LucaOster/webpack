import { useTypedDispatch, useTypedSelector } from '../useHelpers'
import { setChangeExample } from './slice'

export const useExampleSimple = () => {
  const dispatch = useTypedDispatch()
  const exampleSimple = useTypedSelector(state => state.exampleSimple.toggle)

  const setState = {
    setChangeExample: () => dispatch(setChangeExample())
  }

  return { exampleSimple, ...setState }
}
