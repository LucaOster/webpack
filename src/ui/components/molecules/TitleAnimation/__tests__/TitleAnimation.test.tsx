import { act, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from 'testHelpers/providers'
import TitleAnimation from '..'

describe('[Component] TitleAnimation', () => {
  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers()
    })
  })

  const user = userEvent.setup({ delay: null })

  it('should render a heading by clicking the button', async () => {
    renderWithProviders(<TitleAnimation />)

    const button = screen.getByRole('button')

    expect(
      screen.queryByRole('heading', {
        name: /animated text on assembly and disassembly/i
      })
    ).not.toBeInTheDocument()

    await user.click(button)
    jest.advanceTimersByTime(200)

    expect(
      screen.getByRole('heading', {
        name: /animated text on assembly and disassembly/i
      })
    ).toBeInTheDocument()

    await user.click(button)

    expect(
      screen.queryByRole('heading', {
        name: /animated text on assembly and disassembly/i
      })
    ).not.toBeInTheDocument()
  })
})
