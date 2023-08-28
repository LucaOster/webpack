import { screen } from '@testing-library/react'
import renderWithProviders from 'testHelpers/providers/components'
import Default from '..'

describe('[Template] Default', () => {
  it('should render a text', () => {
    renderWithProviders(<Default />)
    const title = screen.getByRole('banner')
    expect(title).toHaveTextContent('Boilerplate')
  })
})
