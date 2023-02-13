import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from 'testHelpers/providers'
import { mockedUseNavigate } from 'testHelpers/mocks'
import Home from '..'

describe('[Page] Home', () => {
  const user = userEvent.setup({ delay: null })

  beforeEach(() => {
    mockedUseNavigate.mockClear()
  })

  it(`should go to another page by clicking the button 1 and it should preload the next page with the onMouseEnter event`, async () => {
    renderWithProviders(<Home />)
    const btn = screen.getByRole('button', {
      name: 'Page Example 1'
    })
    await user.click(btn)
    await user.hover(btn)
    expect(mockedUseNavigate).toHaveBeenCalledTimes(1)
    expect(mockedUseNavigate).toHaveBeenCalledWith('page-example-1')
  })
})
