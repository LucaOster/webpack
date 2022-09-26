import { Outlet } from 'react-router-dom'
import * as S from './styles'

const ErrorTemplate = () => {
  return (
    <S.Grid>
      <S.Header role="banner">Template Error</S.Header>
      <Outlet />
    </S.Grid>
  )
}

export default ErrorTemplate
