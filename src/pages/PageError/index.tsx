import { useSetPageTitle } from 'hooks'
import * as S from './styles'

const PageError = () => {
  useSetPageTitle({ pageTitle: 'Error Page' })

  return (
    <S.Container>
      <S.Title>Page not found!</S.Title>
    </S.Container>
  )
}

export default PageError
