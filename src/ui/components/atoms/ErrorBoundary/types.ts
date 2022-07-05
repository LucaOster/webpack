import { ReactNode } from 'react'

export type ErrorBoundaryProps = {
  children: ReactNode
}

export type StateProps = {
  hasError: boolean
}

export type ConstructorProps = ErrorBoundaryProps | Readonly<ErrorBoundaryProps>
