import { BrowserRouter } from 'react-router-dom'
import Routes from 'router'
import { MainProviders } from 'utils'

const App = () => (
  <MainProviders>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </MainProviders>
)

export default App
