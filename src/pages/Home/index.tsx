import { useNavigate } from 'react-router-dom'
import { useSetPageTitle, useThemeDetect } from 'hooks'
import { useExampleSimple } from 'store/exampleSimple'
import { useExampleWithPayload } from 'store/exampleWithPayload'
import * as S from './styles'
import * as C from 'components'
import { ReactComponent as IconArrowUp } from 'assets/icons/arrow_up.svg'

const Home = () => {
  useSetPageTitle({ pageTitle: 'Boilerplate React' })
  const { exampleSimple, setChangeExample } = useExampleSimple()
  const { exampleWithPayload, setAddText, setRemoveText } =
    useExampleWithPayload()
  const { setTheme, showThemeToSelect } = useThemeDetect()
  const navigate = useNavigate()

  const handleChange = (): void => {
    setChangeExample()

    exampleWithPayload
      ? setRemoveText()
      : setAddText({ exemploText: 'Example Text' })
  }

  return (
    <S.Container>
      <C.TitleSection title="Web Accessibility" />

      <br />

      <IconArrowUp width={50} height={50} title="Arrow pointing up" />

      <br />

      <h1>
        Redux Example State:
        {exampleSimple ? ' true' : ' false'}
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
          color="blue"
          size="large"
          text="Page Example 4"
          aria-label="Page Example 4"
          className="btn"
          onClick={() => navigate('page-example-4')}
        />

        <C.Button
          fullWidth={true}
          color="blue"
          size="large"
          text="Page Example 5"
          aria-label="Page Example 5"
          className="btn"
          onClick={() => navigate('page-example-5')}
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
