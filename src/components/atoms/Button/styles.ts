import styled, { css } from 'styled-components'
import T from 'theme'
import { BtnProps } from './types'

const SizesBtn = {
  small: css`
    height: min-content;
    font-size: ${T.fonts.sizes.xSmall};
    padding: ${T.spacings.xSmall} ${T.spacings.small};
  `,
  medium: css`
    height: min-content;
    font-size: ${T.fonts.sizes.small};
    padding: ${T.spacings.small} ${T.spacings.xLarge};
  `,
  large: css`
    height: min-content;
    font-size: ${T.fonts.sizes.small};
    padding: ${T.spacings.medium} ${T.spacings.xxxLarge};
  `,
  xLarge: css`
    height: min-content;
    font-size: ${T.fonts.sizes.small};
    padding: ${T.spacings.medium} ${T.spacings.xtreme};
  `
}

const ColorsBtn = {
  gray: css`
    background-color: ${T.colors.gray};

    &:hover {
      background-color: ${T.colors.grayHover};
    }
  `,
  blue: css`
    background-color: ${T.colors.primary};

    &:hover {
      background-color: ${T.colors.primaryHover};
    }
  `,
  red: css`
    background-color: ${T.colors.red};

    &:hover {
      background-color: ${T.colors.redHover};
    }
  `
}

export const Container = styled.button<BtnProps>`
  ${({ fullWidth, color, size }) => css`
    cursor: pointer;
    border-radius: ${T.border.radius};
    font-weight: 400;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    border: 2px solid transparent;
    text-shadow: 0 0 0.3rem rgb(0 0 0 / 60%);
    transition: background-color 0.15s ease-in-out;
    width: 100%;
    ${!!color && ColorsBtn[color]};
    ${!!size && SizesBtn[size]}

    ${T.breakpoints.custom(480)} {
      width: ${fullWidth ? '100%' : 'fit-content'};
    }

    &:disabled,
    &:disabled:hover {
      opacity: 0.5;
      cursor: not-allowed;
      background-color: ${T.colors.disabled};
    }

    &:focus {
      border: 2px solid #fff;
      box-shadow: 0 0 0 2px #222;
    }

    span {
      color: ${T.colors.white};
    }

    svg + span {
      margin-left: 1rem;
    }

    svg {
      width: 2rem;
      min-width: 2rem;
      height: 2rem;
      min-height: 2rem;
      color: ${T.colors.white};
    }
  `}
`
