import { useNavigate } from 'react-router-dom'
import { useSetPageTitle, useStorage } from 'hooks'
import * as S from './styles'
import * as C from 'ui/components'
import { ReactComponent as IconArrowUp } from 'ui/assets/icons/arrow_up.svg'

const Home = () => {
  useSetPageTitle({ pageTitle: 'Boilerplate React' })
  const { getStorage, setStorageState } = useStorage({
    key: 'isExampleSimple',
    initialValue: false
  })
  const navigate = useNavigate()

  const handleChange = (): void => setStorageState(!getStorage)

  return (
    <S.Container role="main">
      <C.TitleSection title="Web Accessibility" />

      <IconArrowUp width={50} height={50} title="Arrow pointing up" />

      <h1>
        Redux Example State:
        {getStorage ? ' true' : ' false'}
      </h1>

      <S.BtnGroup>
        <C.Button
          fullWidth={true}
          color="red"
          size="large"
          text="Change Global State"
          aria-label="Change Global State"
          className="btn"
          onClick={handleChange}
        />
      </S.BtnGroup>

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
