import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from 'utils'
import PageExample2 from '..'
import { mockedUseNavigate } from 'mocks'

describe('[Page] PageExample2', () => {
  it('should go to another page by clicking the button', () => {
    const user = userEvent.setup({ skipHover: true })

    renderWithProviders(<PageExample2 />)

    const btn = screen.getByRole('button', { name: 'Return' })

    user.click(btn)
    userEvent.hover(btn)

    expect(mockedUseNavigate).toHaveBeenCalledTimes(1)
    expect(mockedUseNavigate).toHaveBeenCalledWith('/')
  })
})
