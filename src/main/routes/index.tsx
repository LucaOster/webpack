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
        <Route path="page-example-1" element={<Pages.Example1 />} />
      </Route>

      <Route element={<C.ErrorTemplate />}>
        <Route path="*" element={<Pages.Error />} />
      </Route>
    </Routes>
  </Suspense>
)

export default RoutesWrapper
