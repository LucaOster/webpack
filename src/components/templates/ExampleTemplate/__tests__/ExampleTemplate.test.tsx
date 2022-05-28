import { screen } from '@testing-library/react'
import Example from '..'
import { renderWithProviders } from 'utils'

describe('[Template] Example', () => {
  it('should render a children', () => {
    renderWithProviders(<Example />)
    const title = screen.getByRole('banner')
    expect(title).toHaveTextContent('Template Example')
  })
})
