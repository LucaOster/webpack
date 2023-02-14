import { useNavigate } from 'react-router-dom'
import { useSetPageTitle } from 'hooks'
import * as S from './styles'
import * as C from 'ui/components'

const Home = () => {
  useSetPageTitle({ pageTitle: 'Boilerplate React' })
  const navigate = useNavigate()

  return (
    <S.Container role="main">
      <h1>Home Page</h1>

      <S.BtnGroup>
        <C.Button
          fullWidth={true}
          color="blue"
          size="large"
          text="Page Example 1"
          aria-label="Page Example 1"
          className="btn"
          onClick={() => navigate('page-example-1')}
        />
      </S.BtnGroup>
    </S.Container>
  )
}

export default Home
