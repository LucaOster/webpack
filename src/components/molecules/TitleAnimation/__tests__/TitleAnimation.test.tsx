import { act, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from 'utils'
import TitleAnimation from '..'

describe('[Component] TitleAnimation', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers()
    })
    jest.useRealTimers()
  })

  it('should render a button', () => {
    renderWithProviders(<TitleAnimation />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('should render a heading by clicking the button', () => {
    renderWithProviders(<TitleAnimation />)

    const button = screen.getByRole('button')

    expect(screen.queryByRole('heading')).not.toBeInTheDocument()

    userEvent.click(button)

    expect(screen.getByRole('heading')).toBeInTheDocument()

    userEvent.click(button)

    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
  })
})
