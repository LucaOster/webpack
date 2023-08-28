import windowSizes from './windowSizes'

const device = (value: number) => `@media screen and (min-width: ${value}px)`

const breakpoints = {
  custom: (width: number) => device(width),
  desktop: device(windowSizes.desktop),
  tablet: device(windowSizes.tablet)
}

export default breakpoints
