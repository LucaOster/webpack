import styled from 'styled-components'
import T from 'ui/theme'

export const Container = styled.main`
  margin: 20px auto;

  ${T.breakpoints.custom(800)} {
    margin: 120px auto;
  }
`

export const Column = styled.div`
  max-width: 35rem;
  margin: 50px auto;

  .btn {
    opacity: 0;
    animation: ${T.animations.fadeInMove('0', '30px', '0')} 0.3s linear forwards
      0.2s;
  }
`
