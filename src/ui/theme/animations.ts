import { keyframes } from 'styled-components'

export const animations = {
  rotate: keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `,
  fadeInMove: (x: string, y: string, z: string) => keyframes`
      0% {
        opacity: 0;
        transform: translate3d(${x}, ${y}, ${z});
      }
      100% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    `,
  fadeIn: keyframes`
    to {
      opacity: 1;
    }
  `,
  glass: keyframes`
    to {
      background-color: #000000b3;
      backdrop-filter: blur(0.7rem);
    }
  `
}
