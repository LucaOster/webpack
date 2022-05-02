import { lazy } from 'react'

export { default as Home } from './Home'
export const PageExample1 = lazy(() => import('./PageExample1'))
export const PageExample2 = lazy(() => import('./PageExample2'))
export const PageExample3 = lazy(() => import('./PageExample3'))
export const PageExample4 = lazy(() => import('./PageExample4'))
export const PageExample5 = lazy(() => import('./PageExample5'))
export const PageError = lazy(() => import('./PageError'))
