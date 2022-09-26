import { screen } from '@testing-library/react'
import { renderWithProviders } from 'testHelpers/providers'
import Error from '..'

describe('[Template] Error', () => {
  it('should render a text', () => {
    renderWithProviders(<Error />)
    const title = screen.getByRole('banner')
    expect(title).toHaveTextContent('Template Error')
  })
})
