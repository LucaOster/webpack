import { useNavigate } from 'react-router-dom'
import { useSetPageTitle, useStorage, useThemeDetect } from 'hooks'
import { useExampleWithPayloadAdapter } from 'infra/store/exampleWithPayload/useAdapter'
import * as S from './styles'
import * as C from 'ui/components'
import { ReactComponent as IconArrowUp } from 'ui/assets/icons/arrow_up.svg'

const Home = () => {
  useSetPageTitle({ pageTitle: 'Boilerplate React' })
  const { getStorage, setStorageState } = useStorage({
    key: 'isExampleSimple'
  })
  const { exampleWithPayload, setAddText, setRemoveText } =
    useExampleWithPayloadAdapter()
  const { setTheme, showThemeToSelect } = useThemeDetect()
  const navigate = useNavigate()

  const handleChange = (): void => {
    setStorageState(!getStorage)

    exampleWithPayload
      ? setRemoveText()
      : setAddText({ exemploText: 'Example Text' })
  }

  return (
    <S.Container role="main">
      <C.TitleSection title="Web Accessibility" />

      <br />

      <IconArrowUp width={50} height={50} title="Arrow pointing up" />

      <br />

      <h1>
        Redux Example State:
        {getStorage ? ' true' : ' false'}
      </h1>

      <br />

      <h1>Payload: {exampleWithPayload || 'Empty'}</h1>

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

        <C.Button
          fullWidth={true}
          color="blue"
          size="large"
          text="Page Example 2"
          aria-label="Page Example 2"
          className="btn"
          onClick={() => navigate('page-example-2')}
        />

        <C.Button
          fullWidth={true}
          color="blue"
          size="large"
          text="Page Example 3"
          aria-label="Page Example 3"
          className="btn"
          onClick={() => navigate('page-example-3')}
        />

        <C.Button
          fullWidth={true}
          color="red"
          size="large"
          text={`Theme ${showThemeToSelect}`}
          aria-label={`Theme ${showThemeToSelect}`}
          className="btn"
          onClick={setTheme}
        />
      </S.BtnGroup>
    </S.Container>
  )
}

export default Home
