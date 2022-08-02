import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from 'testHelpers/providers'
import { mockedUseNavigate } from 'testHelpers/mocks'
import Example2 from '..'

describe('[Page] Example2', () => {
  const user = userEvent.setup({ delay: null, skipHover: true })

  it('should go to another page by clicking the button', async () => {
    renderWithProviders(<Example2 />)

    const btn = screen.getByRole('button', { name: 'Return' })
    await user.click(btn)
    await user.hover(btn)

    expect(mockedUseNavigate).toHaveBeenCalledTimes(1)
    expect(mockedUseNavigate).toHaveBeenCalledWith('/')
  })
})
