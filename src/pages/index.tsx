import { lazy } from 'react'

export { default as Home } from './Home'
export const PageExample1 = lazy(() => import('./PageExample1'))
export const PageExample2 = lazy(() => import('./PageExample2'))
export const PageExample4 = lazy(() => import('./PageExample3'))
export const PageError = lazy(() => import('./PageError'))
