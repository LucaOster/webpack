import { css } from 'styled-components'

export const ColorsTheme = css`
  body[data-theme='light'] {
    --colors-primary: #334bc8;
    --colors-secondary: #fff;
    --colors-primaryHover: #5872ff;
    --colors-gray: #7a7a7a;
    --colors-grayHover: #aaaaaa;
    --colors-grayLight: #fafafa;
    --colors-bullet: #ebedfa;
    --colors-white: #fff;
    --colors-black: #000;
    --colors-red: #c83333;
    --colors-redHover: #fa4c4c;
    --colors-blue: #011fbb;
    --colors-blueDark: #001c33;
    --colors-blueLight: #e9f4fe;
    --colors-disabled: #a1a4b0;
    --colors-overlay: #000000b3;
  }

  body[data-theme='dark'] {
    --colors-primary: #334bc8;
    --colors-secondary: #0d1117;
    --colors-primaryHover: #5872ff;
    --colors-gray: #7a7a7a;
    --colors-grayHover: #aaaaaa;
    --colors-grayLight: #fafafa;
    --colors-bullet: #ebedfa;
    --colors-white: #fff;
    --colors-black: #c9d1d9;
    --colors-red: #c83333;
    --colors-redHover: #fa4c4c;
    --colors-blue: #011fbb;
    --colors-blueDark: #001c33;
    --colors-blueLight: #e9f4fe;
    --colors-disabled: #a1a4b0;
    --colors-overlay: #000000b3;
  }
`
