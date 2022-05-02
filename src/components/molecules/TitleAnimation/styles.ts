import styled, { css } from 'styled-components'
import T from 'theme'

export const Wrapper = styled.div``

export const TitleAnimation = styled.h1<{ isVisible: boolean }>`
  ${({ isVisible }) =>
    isVisible
      ? css`
          visibility: visible;
          opacity: 1;
          transform: scale(1);
        `
      : css`
          visibility: hidden;
          opacity: 0.6;
          transform: scale(0.3);
        `}

  transition: all 1s cubic-bezier(.4,0,.2,1);
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
