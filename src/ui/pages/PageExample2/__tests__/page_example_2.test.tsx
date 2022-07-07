import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from 'tests/providers'
import PageExample2 from '..'
import { mockedUseNavigate } from 'tests/mocks'

describe('[Page] PageExample2', () => {
  it('should go to another page by clicking the button', async () => {
    const user = userEvent.setup({ delay: null, skipHover: true })

    renderWithProviders(<PageExample2 />)

    const btn = screen.getByRole('button', { name: 'Return' })

    await user.click(btn)
    await user.hover(btn)

    expect(mockedUseNavigate).toHaveBeenCalledTimes(1)
    expect(mockedUseNavigate).toHaveBeenCalledWith('/')
  })
})
