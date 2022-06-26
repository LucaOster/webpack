import { animations } from './animations'
import { breakpoints } from './breakpoints'
import { colors } from './colors'
import { spacings } from './spacings'
import { fonts } from './typographies'
import { windowSizes } from './windowSizes'

const grid = {
  container: '130rem',
  gutter: '24px'
}

const border = {
  radius: '4px',
  circle: '50%'
}

const layers = {
  base: 10
}

const T = {
  colors,
  fonts,
  spacings,
  animations,
  breakpoints,
  windowSizes,
  grid,
  border,
  layers
} as const

export default T
