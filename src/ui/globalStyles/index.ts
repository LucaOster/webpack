import { createGlobalStyle } from 'styled-components'
import T from 'ui/theme'

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    list-style: none !important;
    outline: none;
    font-family: ${T.fonts.family};
    line-height: calc(1em + 0.5rem);
  }

  @media (prefers-reduced-motion: reduce) {
    body *,
    body *::before,
    body *::after {
      animation-delay: -1ms !important;
      animation-duration: 1ms !important;
      animation-iteration-count: 1 !important;
      background-attachment: initial !important;
      scroll-behavior: auto !important;
      transition-delay: -1ms !important;
      transition-duration: 1ms !important;
    }
  }

  html {
    font-size: 62.5%;
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 100vh;
    isolation: isolate;
    background-image: linear-gradient(45deg, ${T.colors.dark}, ${T.colors.secondary}, ${T.colors.primary});
    color: ${T.colors.white};
  }

  p, h1, h2, h3, h4, h5, h6 {
    word-break: break-word;
  }

  b,
  strong {
    font-weight: bolder;
  }

  #root,
  body,
  optgroup,
  input,
  select,
  textarea,
  button {
    font-weight: ${T.fonts.weights.medium};
    font-style: ${T.fonts.sizes.xs};
    font-family: ${T.fonts.family};
    margin: 0;
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: ${T.borderRadius.sm};
  }

  a,
  a:active {
    color: inherit;
    text-decoration: none;
  }

  :focus {
    outline: 4px solid ${T.colors.focus};
    outline-offset: 1px;
  }

  :focus-visible {
    outline: 4px solid ${T.colors.focus};
    outline-offset: 1px;
  }

  :focus:not(:focus-visible) {
    box-shadow: none;
    outline: 0;
  }

  mark {
    &::before,
    &::after {
      clip: rect(1px, 1px, 1px, 1px);
      clip-path: inset(100%);
      content: ' [start of highlighted text] ';
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    &::after {
      content: ' [end of highlighted text] ';
    }
  }

  ::-webkit-scrollbar,
  scrollbar-width {
    width: 16px !important;
    background-color: ${T.colors.white};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${T.colors.gray};
    border-radius: 20px;
    border: 3px solid ${T.colors.white};
  }

  :root {
    scrollbar-color: ${T.colors.gray} ${T.colors.white} !important;
    scrollbar-width: 16px !important;
  }
`

export default GlobalStyles
