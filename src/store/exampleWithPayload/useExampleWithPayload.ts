import { useTypedDispatch, useTypedSelector } from '../useHelpers'
import { setRemoveText, setAddText } from './slice'
import { ExemploTextProp } from './types'

export const useExampleWithPayload = () => {
  const dispatch = useTypedDispatch()
  const exampleWithPayload = useTypedSelector(
    state => state.exampleWithPayload.text
  )

  const setState = {
    setRemoveText: () => dispatch(setRemoveText()),
    setAddText: (exemploText: ExemploTextProp) => {
      dispatch(setAddText(exemploText))
    }
  }

  return { exampleWithPayload, ...setState }
}
