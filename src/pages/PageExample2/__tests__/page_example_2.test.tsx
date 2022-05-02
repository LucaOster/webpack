import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from 'utils'
import PageExample2 from '..'
import { mockedUseNavigate } from '__mocks__'

describe('[Page] PageExample2', () => {
  it('should an Home page', () => {
    const { container } = renderWithProviders(<PageExample2 />)
    expect(container).toBeInTheDocument()
  })

  it('should go to another page by clicking the button', () => {
    renderWithProviders(<PageExample2 />)

    const btn = screen.getByRole('button', { name: 'Return' })

    fireEvent.click(btn)
    fireEvent.mouseEnter(btn)

    expect(mockedUseNavigate).toBeCalledTimes(1)
    expect(mockedUseNavigate).toHaveBeenCalledWith('/')
  })
})
