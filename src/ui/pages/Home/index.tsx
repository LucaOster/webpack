import { useState } from 'react'
import { useSetPageTitle } from 'hooks'
import * as C from 'ui/components'
import * as S from './styles'
import { ReactComponent as LogoReact } from 'ui/assets/images/logoReact.svg'
import LogoWebpack from 'ui/assets/images/logoWebpack.webp'

const Home = () => {
  const [count, setCount] = useState(0)
  useSetPageTitle({ pageTitle: 'Boilerplate React' })

  return (
    <S.Container>
      <S.WrapperImages>
        <img alt="Logo Webpack" src={LogoWebpack} />
        <LogoReact role="img" title="Logo React" />
      </S.WrapperImages>
      <S.Title>Webpack + React</S.Title>
      <C.Button
        aria-label={`COUNT: ${count}`}
        onClick={() => setCount(prevState => prevState + 1)}
        text={`COUNT: ${count}`}
      />
    </S.Container>
  )
}

export default Home
