import { ReactNode } from 'react'
import { render, RenderResult } from '@testing-library/react'
import MainProvider from 'ui/providers/mainProvider'

const renderWithProviders = (children: ReactNode): RenderResult =>
  render(<MainProvider>{children}</MainProvider>)

export default renderWithProviders
