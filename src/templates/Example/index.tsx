import { Outlet } from 'react-router-dom'
import * as S from './styles'

const Example = () => {
  return (
    <S.Grid>
      <h1>Template Example</h1>
      <div>
        <Outlet />
      </div>
    </S.Grid>
  )
}

export default Example
