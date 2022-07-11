import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from './types'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useTypedDispatch = () => useDispatch<AppDispatch>()
