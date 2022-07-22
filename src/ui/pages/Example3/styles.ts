import styled from 'styled-components'
import T from 'ui/theme'

export const Container = styled.main`
  margin: 20px auto;
  padding: 20px;

  ${T.breakpoints.custom(800)} {
    margin: 120px auto;
  }
`

export const BtnGroup = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 35rem;
  gap: ${T.grid.gutter};
  margin: ${T.spacings.xtreme} auto 0 auto;

  .btn {
    opacity: 0;
    animation: ${T.animations.fadeInMove('0', '30px', '0')} 0.3s linear forwards
      0.2s;
  }

  align-items: center;
`

export const WrapperRepositories = styled.p`
  display: flex;
  flex-direction: column;

  span {
    margin-top: 10px;
  }
`
