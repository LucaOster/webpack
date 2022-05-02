import { Outlet } from 'react-router-dom'
import * as S from './styles'

const Default = () => {
  return (
    <S.Grid>
      <h1>Template Default</h1>
      <div>
        <Outlet />
      </div>
    </S.Grid>
  )
}

export default Default
