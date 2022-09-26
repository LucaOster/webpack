import { screen } from '@testing-library/react'
import { renderWithProviders } from 'testHelpers/providers'
import Example from '..'

describe('[Template] Example', () => {
  it('should render a text', () => {
    renderWithProviders(<Example />)
    const title = screen.getByRole('banner')
    expect(title).toHaveTextContent('Template Example')
  })
})
