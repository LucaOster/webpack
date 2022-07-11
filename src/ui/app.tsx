import { BrowserRouter } from 'react-router-dom'
import Routes from 'main/routes'
import { MainProviders } from 'ui/providers'

const App = () => (
  <MainProviders>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </MainProviders>
)

export default App
