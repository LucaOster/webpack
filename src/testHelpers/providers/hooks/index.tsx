import { renderHook } from '@testing-library/react'
import MainProvider from 'ui/providers/mainProvider'
import { type RenderHooksProviderProps, type WrapperProps } from './types'

const wrapper = ({ children }: WrapperProps) => (
  <MainProvider>{children}</MainProvider>
)

const renderHooksProvider = (children: RenderHooksProviderProps) =>
  renderHook(children, { wrapper })

export default renderHooksProvider
