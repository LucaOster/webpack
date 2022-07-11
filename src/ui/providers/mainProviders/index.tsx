import { GlobalStyles } from 'ui/globalStyles'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from 'infra/store/configStore'
import * as C from 'ui/components'
import { ThemeProviders } from '../themeProviders'
import { MainProvidersProps } from './types'

export const MainProviders = ({ children, setTheme }: MainProvidersProps) => {
  if (setTheme) document.body.dataset.theme = setTheme

  const Theme = () =>
    setTheme ? <>{children}</> : <ThemeProviders>{children}</ThemeProviders>

  return (
    <C.ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}>
          <Theme />
          <GlobalStyles />
        </PersistGate>
      </Provider>
    </C.ErrorBoundary>
  )
}
