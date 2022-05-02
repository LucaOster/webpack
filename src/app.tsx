import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import Routes from 'router'
import { persistor, store } from 'store/configStore'
import GlobalStyles from 'styles/GlobalStyles'
import * as C from 'components'

const App = () => (
  <C.ErrorBoundary>
    <Provider store={store}>
      <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyles />
      </PersistGate>
    </Provider>
  </C.ErrorBoundary>
)

export default App
