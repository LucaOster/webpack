import * as S from './styles'
import { ErrorProps } from './types'

const Error = ({ children }: ErrorProps) => {
  return (
    <S.Grid>
      <h1>Template Error</h1>
      <div>{children}</div>
    </S.Grid>
  )
}

export default Error
