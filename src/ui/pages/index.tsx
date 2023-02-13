import { lazy } from 'react'

export { default as Home } from './Home'
export const Example1 = lazy(() => import('./Example1'))
export const Error = lazy(() => import('./Error'))
