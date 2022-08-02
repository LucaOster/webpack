import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from 'testHelpers/providers'
import { mockedUseNavigate } from 'testHelpers/mocks'
import Example1 from '..'

describe('[Page] PageExample1', () => {
  const user = userEvent.setup({ delay: null })

  it('should go to another page by clicking the button', async () => {
    renderWithProviders(<Example1 />)

    const btn = screen.getByRole('button', { name: 'Return' })
    await user.click(btn)
    await user.hover(btn)

    expect(mockedUseNavigate).toHaveBeenCalledTimes(1)
    expect(mockedUseNavigate).toHaveBeenCalledWith('/')
  })
})
