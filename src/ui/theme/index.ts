import borderRadius from './borderRadius'
import grids from './grids'
import zIndex from './zIndex'
import animations from './animations'
import breakpoints from './breakpoints'
import boxShadows from './boxShadows'
import colors from './colors'
import spacings from './spacings'
import fonts from './fonts'
import windowSizes from './windowSizes'

const T = {
  animations,
  borderRadius,
  boxShadows,
  breakpoints,
  colors,
  fonts,
  grids,
  spacings,
  windowSizes,
  zIndex
} as const

export default T
