import { lazy } from 'react'

export { default as Home } from './Home'
export const Error = lazy(() => import('./Error'))
