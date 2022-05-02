import { forwardRef, memo } from 'react'
import * as S from './styles'
import { BtnProps } from './types'

const Button = forwardRef<HTMLButtonElement, BtnProps>(
  ({ icon, text, ...props }, ref) => (
    <S.Container {...props} ref={ref}>
      {icon}
      {!!text && <span>{text}</span>}
    </S.Container>
  )
)

export default memo(Button)
