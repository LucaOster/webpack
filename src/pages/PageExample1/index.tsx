import { useNavigate } from 'react-router-dom'
import { useSetPageTitle } from 'hooks'
import * as S from './styles'
import * as C from 'components'

const PageExample1 = () => {
  useSetPageTitle({ pageTitle: 'Page Example 1' })
  const navigate = useNavigate()

  return (
    <S.Container as="section">
      <C.TitleSection title="Page Example 1" />

      <br />

      <C.TitleAnimation />

      <S.Column>
        <C.Button
          fullWidth={true}
          color="blue"
          size="large"
          text="Return"
          className="btn"
          aria-label="Return"
          onClick={() => navigate('/')}
        />
      </S.Column>
    </S.Container>
  )
}

export default PageExample1
