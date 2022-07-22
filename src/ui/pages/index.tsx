import { lazy } from 'react'

export { default as Home } from './Home'
export const Example1 = lazy(() => import('./Example1'))
export const Example2 = lazy(() => import('./Example2'))
export const Example4 = lazy(() => import('./Example3'))
export const Error = lazy(() => import('./Error'))
