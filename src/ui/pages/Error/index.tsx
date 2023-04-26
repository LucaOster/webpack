import { useSetPageTitle } from 'hooks'
import * as S from './styles'

const Error = () => {
  useSetPageTitle({ pageTitle: 'Error Page' })

  return (
    <S.Grid>
      <S.Header role="banner">Error!</S.Header>
      <S.Container>
        <S.Title>Page not found!</S.Title>
      </S.Container>
    </S.Grid>
  )
}

export default Error
