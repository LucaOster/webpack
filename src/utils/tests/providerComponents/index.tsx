import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { render, RenderResult } from '@testing-library/react'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from 'store/configStore'
import * as C from 'components'

export const renderWithProviders = (children: ReactNode): RenderResult =>
  render(
    <C.ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </C.ErrorBoundary>
  )
