import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from 'ui/routes'
import MainProvider from 'ui/providers/mainProvider'

const App = () => (
  <Suspense fallback={<h1>Loading...</h1>}>
    <MainProvider>
      <RouterProvider router={router} />
    </MainProvider>
  </Suspense>
)

export default App
