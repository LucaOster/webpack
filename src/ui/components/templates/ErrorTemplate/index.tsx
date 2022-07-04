import * as S from './styles'
import { ErrorProps } from './types'

const ErrorTemplate = ({ children }: ErrorProps) => {
  return (
    <S.Grid>
      <S.Header role="banner">Template Error</S.Header>
      <div>{children}</div>
    </S.Grid>
  )
}

export default ErrorTemplate
