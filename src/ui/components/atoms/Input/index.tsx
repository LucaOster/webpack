import { forwardRef, memo } from 'react'
import * as S from './styles'
import { InputProps } from './types'

const Input = forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => (
  <S.Input ref={ref} {...props} type="text" />
))

export default memo(Input)
