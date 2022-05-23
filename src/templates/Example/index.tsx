import { Outlet } from 'react-router-dom'
import * as S from './styles'

const Example = () => {
  return (
    <S.Grid>
      <S.Header role="banner">Template Example</S.Header>
      <div>
        <Outlet />
      </div>
    </S.Grid>
  )
}

export default Example
