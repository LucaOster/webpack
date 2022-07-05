import { windowSizes } from './windowSizes'

const device = (value: number) => `@media screen and (min-width: ${value}px)`

export const breakpoints = {
  mobile: device(windowSizes.sm),
  tablet: device(windowSizes.md),
  desktop: device(windowSizes.lg),
  custom: (value: number) => device(value)
}
