import { Outlet } from 'react-router-dom'
import * as S from './styles'

const DefaultTemplate = () => (
  <S.Grid>
    <S.Header role="banner">Boilerplate</S.Header>
    <S.ContainerPage>
      <Outlet />
    </S.ContainerPage>
  </S.Grid>
)

export default DefaultTemplate
