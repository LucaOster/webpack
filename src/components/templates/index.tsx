import { lazy } from 'react'

export { default as DefaultTemplate } from './DefaultTemplate'
export const ExampleTemplate = lazy(() => import('./ExampleTemplate'))
export const ErrorTemplate = lazy(() => import('./ErrorTemplate'))
