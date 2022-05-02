import styled from 'styled-components'
import T from 'theme'

export const Container = styled.div`
  margin: 2rem auto;

  ${T.breakpoints.custom(800)} {
    margin: 12rem auto;
  }
`

export const Column = styled.div`
  max-width: 35rem;
  margin: 5rem auto;

  .btn {
    opacity: 0;
    animation: ${T.animations.fadeInMove('0', '30px', '0')} 0.3s linear forwards
      0.2s;
  }
`
