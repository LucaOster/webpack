import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from 'utils'
import PageExample1 from '..'
import { mockedUseNavigate } from '__mocks__'

describe('[Page] PageExample1', () => {
  it('should an Home page', () => {
    const { container } = renderWithProviders(<PageExample1 />)
    expect(container).toBeInTheDocument()
  })

  it('should go to another page by clicking the button', () => {
    renderWithProviders(<PageExample1 />)

    const btn = screen.getByRole('button', { name: 'Return' })

    fireEvent.click(btn)
    fireEvent.mouseEnter(btn)

    expect(mockedUseNavigate).toBeCalledTimes(1)
    expect(mockedUseNavigate).toHaveBeenCalledWith('/')
  })
})
