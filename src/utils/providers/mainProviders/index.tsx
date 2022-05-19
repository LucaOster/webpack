import { GlobalStyles } from 'globalStyles'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from 'store/configStore'
import * as C from 'components'
import { ThemeProviders } from '../themeProviders'
import { MainProvidersProps } from './types'

export const MainProviders = ({ children }: MainProvidersProps) => {
  return (
    <C.ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}>
          <ThemeProviders>{children}</ThemeProviders>
          <GlobalStyles />
        </PersistGate>
      </Provider>
    </C.ErrorBoundary>
  )
}
