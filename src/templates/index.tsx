import { lazy } from 'react'

export { default as Default } from './Default'
export const Example = lazy(() => import('./Example'))
export const Error = lazy(() => import('./Error'))
