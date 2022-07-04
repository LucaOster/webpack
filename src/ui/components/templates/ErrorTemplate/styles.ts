import styled from 'styled-components'
import T from 'ui/theme'

export const Grid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  grid-template-rows: 100vh;
`

export const Header = styled.header`
  font-size: ${T.fonts.sizes.xLarge};
`
