import { Outlet } from 'react-router-dom'
import * as S from './styles'

const DefaultTemplate = () => {
  return (
    <S.Grid>
      <S.Header role="banner">Template Default</S.Header>
      <div>
        <Outlet />
      </div>
    </S.Grid>
  )
}

export default DefaultTemplate
