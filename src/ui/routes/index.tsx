import { createBrowserRouter } from 'react-router-dom'
import * as Pages from 'ui/pages'
import * as C from 'ui/components'

const router = createBrowserRouter([
  {
    children: [
      {
        element: <Pages.Home />,
        path: '/'
      }
    ],
    element: <C.DefaultTemplate />
  },
  {
    element: <Pages.Error />,
    path: '*'
  }
])
export default router
