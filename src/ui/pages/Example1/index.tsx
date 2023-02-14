import { useNavigate } from 'react-router-dom'
import { useSetPageTitle } from 'hooks'
import * as S from './styles'
import * as C from 'ui/components'

const Example1 = () => {
  useSetPageTitle({ pageTitle: 'Page Example 1' })
  const navigate = useNavigate()

  return (
    <S.Container role="main">
      <h1>Page Example 1</h1>

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

export default Example1
