import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import * as C from 'components'

const PageExample2 = () => {
  const navigate = useNavigate()

  return (
    <S.Container as="section">
      <C.TitleSection title="Page Example 2" />

      <br />

      <C.RenderTextByBreakpoint />

      <S.BtnGroup>
        <C.Button
          fullWidth={true}
          color="blue"
          size="large"
          text="Return"
          className="btn"
          aria-label="Return"
          onClick={() => navigate('/')}
        />
      </S.BtnGroup>
    </S.Container>
  )
}

export default PageExample2
