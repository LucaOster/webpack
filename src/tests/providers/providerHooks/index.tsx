import { renderHook } from '@testing-library/react'
import { MainProviders } from 'utils/providers/mainProviders'
import { RenderHooksProviderProps, WrapperProps } from './types'

const wrapper = ({ children }: WrapperProps) => (
  <MainProviders>{children}</MainProviders>
)

export const renderHooksProvider = (children: RenderHooksProviderProps) =>
  renderHook(children, { wrapper })
