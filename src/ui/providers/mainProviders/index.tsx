import { GlobalStyles } from 'ui/globalStyles'
import * as C from 'ui/components'
import { MainProvidersProps } from './types'

export const MainProviders = ({ children }: MainProvidersProps) => (
  <C.ErrorBoundary>
    {children}
    <GlobalStyles />
  </C.ErrorBoundary>
)
