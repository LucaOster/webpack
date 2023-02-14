import { borders } from 'ui/theme/borders'
import { grids } from 'ui/theme/grids'
import { layers } from 'ui/theme/layers'
import { animations } from './animations'
import { breakpoints } from './breakpoints'
import { colors } from './colors'
import { spacings } from './spacings'
import { fonts } from './typographies'
import { windowSizes } from './windowSizes'

const T = {
  colors,
  fonts,
  spacings,
  animations,
  breakpoints,
  windowSizes,
  grids,
  borders,
  layers
} as const

export default T
