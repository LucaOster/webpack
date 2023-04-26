import { screen } from '@testing-library/react'
import { renderWithProviders } from 'testHelpers/providers'
import Error from '..'

describe('[Page] Error', () => {
  it('should render a heading and a title', () => {
    renderWithProviders(<Error />)

    const heading = screen.getByRole('banner')
    const title = screen.getByRole('heading', {
      name: 'Page not found!'
    })

    expect(heading).toHaveTextContent('Error!')
    expect(title).toBeInTheDocument()
  })
})
