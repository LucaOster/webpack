import { screen } from '@testing-library/react'
import { renderWithProviders } from 'testHelpers/providers'
import Default from '..'

describe('[Template] Default', () => {
  it('should render a children', () => {
    renderWithProviders(<Default />)
    const title = screen.getByRole('banner')
    expect(title).toHaveTextContent('Template Default')
  })
})
