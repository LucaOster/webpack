import { ColorsTheme } from './colors'
import { createGlobalStyle } from 'styled-components'
import T from 'theme'

export const GlobalStyles = createGlobalStyle`
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
  }

  html {
    font-size: 62.5%;
  }

  body,
  html,
  #root {
    background-color: ${T.colors.secondary};
    color: ${T.colors.black};
  }

  #root,
  body,
  input,
  select,
  textarea,
  button {
    font: ${T.fonts.normal} ${T.fonts.sizes.medium} Inter, sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: ${T.border.radius};
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 100vh;
  }

  a,
  a:active {
    color: inherit;
    text-decoration: none;
  }

  ::-webkit-scrollbar,
  scrollbar-width {
    width: 1.6rem !important;
    background-color: ${T.colors.white};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${T.colors.primary};
    border-radius: 2rem;
    border: 0.3rem solid ${T.colors.white};
  }

  :root {
    scrollbar-color: ${T.colors.primary} ${T.colors.white} !important;
    scrollbar-width: 1.6rem !important;
  }

  ${ColorsTheme}
`
