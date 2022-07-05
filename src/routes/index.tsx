import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import * as Pages from 'ui/pages'
import * as C from 'ui/components'

const RoutesWrapper = () => (
  <Suspense fallback={<>Lazy Loading...</>}>
    <Routes>
      <Route element={<C.DefaultTemplate />}>
        <Route index element={<Pages.Home />} />
      </Route>

      <Route path="/" element={<C.ExampleTemplate />}>
        <Route path="page-example-1" element={<Pages.PageExample1 />} />
        <Route path="page-example-2" element={<Pages.PageExample2 />} />
        <Route path="page-example-3" element={<Pages.PageExample4 />} />
      </Route>

      <Route
        path="*"
        element={
          <C.ErrorTemplate>
            <Pages.PageError />
          </C.ErrorTemplate>
        }
      />
    </Routes>
  </Suspense>
)

export default RoutesWrapper
