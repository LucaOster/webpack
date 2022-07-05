import * as S from './styles'
import { TitleProps } from './types'

const TitleSection = ({ title, as = 'h1' }: TitleProps) => (
  <S.TitleSection as={as}>{title}</S.TitleSection>
)

export default TitleSection
