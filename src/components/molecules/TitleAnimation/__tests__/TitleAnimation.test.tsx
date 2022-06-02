import { act, fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from 'utils'
import TitleAnimation from '..'

describe('[Component] TitleAnimation', () => {
  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers()
    })
  })

  it('should render a heading by clicking the button', () => {
    renderWithProviders(<TitleAnimation />)

    const button = screen.getByRole('button')

    expect(
      screen.queryByRole('heading', {
        name: /animated text on assembly and disassembly/i
      })
    ).not.toBeInTheDocument()

    fireEvent.click(button)

    jest.advanceTimersByTime(200)

    expect(
      screen.getByRole('heading', {
        name: /animated text on assembly and disassembly/i
      })
    ).toBeInTheDocument()

    fireEvent.click(button)

    expect(
      screen.queryByRole('heading', {
        name: /animated text on assembly and disassembly/i
      })
    ).not.toBeInTheDocument()
  })
})
