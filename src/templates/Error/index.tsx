import * as S from './styles'
import { ErrorProps } from './types'

const Error = ({ children }: ErrorProps) => {
  return (
    <S.Grid>
      <S.Header role="banner">Template Error</S.Header>
      <div>{children}</div>
    </S.Grid>
  )
}

export default Error
