import { screen } from '@testing-library/react'
import { renderWithProviders } from 'testHelpers/providers'
import Error from '..'

describe('[Page] Error', () => {
  it('should the following section title: Page not found!', () => {
    renderWithProviders(<Error />)
    const titleSection = screen.getByRole('heading', {
      name: 'Page not found!'
    })
    expect(titleSection).toBeInTheDocument()
  })
})
