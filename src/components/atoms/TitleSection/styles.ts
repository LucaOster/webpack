import styled from 'styled-components'
import T from 'theme'

export const TitleSection = styled.h1`
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: center;
  padding: 0 2rem;
  margin: 20px 0;
  opacity: 0;
  animation: ${T.animations.fadeInMove('0', '-40px', '0')} 0.6s ease forwards;
  font-size: ${T.fonts.sizes.xLarge};
  font-weight: ${T.fonts.normal};

  ${T.breakpoints.custom(800)} {
    font-size: ${T.fonts.sizes.xxLarge};
  }
`
