import styled, { css } from 'styled-components'
import T from 'theme'

const titleVisible = css`
  visibility: visible;
  opacity: 1;
  transform: scale(1);
`

const titleHidden = css`
  visibility: hidden;
  opacity: 0.6;
  transform: scale(0.3);
`

export const TitleAnimation = styled.h1<{ isVisible: boolean }>`
  ${({ isVisible }) => (isVisible ? titleVisible : titleHidden)}
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
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
