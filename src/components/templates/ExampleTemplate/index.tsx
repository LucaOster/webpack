import { Outlet } from 'react-router-dom'
import * as S from './styles'

const ExampleTemplate = () => {
  return (
    <S.Grid>
      <S.Header role="banner">Template Example</S.Header>
      <div>
        <Outlet />
      </div>
    </S.Grid>
  )
}

export default ExampleTemplate
