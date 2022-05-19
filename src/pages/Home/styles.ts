import styled from 'styled-components'
import T from 'theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  padding: 0;
  align-items: center;

  ${T.breakpoints.custom(800)} {
    margin: 12rem auto;
    padding: 0 2rem;
  }

  svg {
    fill: ${T.colors.primaryHover};
  }
`

export const BtnGroup = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 35rem;
  gap: ${T.grid.gutter};
  margin-top: ${T.spacings.xtreme};
  padding: 0 ${T.spacings.large};

  .btn {
    opacity: 0;
    animation: ${T.animations.fadeInMove('0', '30px', '0')} 0.3s linear forwards
      0.2s;
  }

  align-items: center;
`
