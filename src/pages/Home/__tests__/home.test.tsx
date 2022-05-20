import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from 'utils'
import Home from '..'
import { mockedUseNavigate } from 'mocks'

describe('[Page] Home', () => {
  beforeEach(() => {
    jest.resetModules()
    mockedUseNavigate.mockClear()
  })

  it('should alternate the text displayed in two h1 each time the button is clicked', () => {
    renderWithProviders(<Home />)

    const btn = screen.getByRole('button', { name: 'Change Global State' })
    const titleSectionStateExample1 = screen.getByRole('heading', {
      name: 'Redux Example State: false'
    })
    const titleSectionPayload1 = screen.getByRole('heading', {
      name: 'Payload: Empty'
    })

    expect(titleSectionStateExample1).toBeInTheDocument()
    expect(titleSectionPayload1).toBeInTheDocument()

    userEvent.click(btn)

    const titleSectionStateExample2 = screen.getByRole('heading', {
      name: 'Redux Example State: true'
    })
    const titleSectionPayload2 = screen.getByRole('heading', {
      name: 'Payload: Example Text'
    })

    expect(titleSectionStateExample2).toBeInTheDocument()
    expect(titleSectionPayload2).toBeInTheDocument()

    userEvent.click(btn)

    const titleSectionStateExample3 = screen.getByRole('heading', {
      name: 'Redux Example State: false'
    })
    const titleSectionPayload3 = screen.getByRole('heading', {
      name: 'Payload: Empty'
    })

    expect(titleSectionStateExample3).toBeInTheDocument()
    expect(titleSectionPayload3).toBeInTheDocument()
  })

  const dataTests = [
    { buttonNumber: 1 },
    { buttonNumber: 2 },
    { buttonNumber: 3 },
    { buttonNumber: 4 },
    { buttonNumber: 5 }
  ]

  dataTests.forEach(({ buttonNumber }) => {
    it(`should go to another page by clicking the button ${buttonNumber} and it should preload the next page with the onMouseEnter event`, () => {
      renderWithProviders(<Home />)

      const btn = screen.getByRole('button', {
        name: `Page Example ${buttonNumber}`
      })

      userEvent.click(btn)
      userEvent.hover(btn)

      expect(mockedUseNavigate).toHaveBeenCalledTimes(1)
      expect(mockedUseNavigate).toHaveBeenCalledWith(
        `page-example-${buttonNumber}`
      )
    })
  })

  it('should toggle the button text on click', () => {
    renderWithProviders(<Home />)

    const btnTheme = screen.getByRole('button', { name: /theme/i })

    expect(btnTheme).toHaveTextContent('Theme dark')

    userEvent.click(btnTheme)

    expect(btnTheme).toHaveTextContent('Theme light')
  })

  it('should toggle the attribute theme value in the body when clicking the button', () => {
    document.body.setAttribute('data-theme', 'light')
    renderWithProviders(<Home />)

    const btnTheme = screen.getByRole('button', { name: /theme/i })

    expect(document.body.dataset.theme).toBe('dark')
    expect(
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ).toBeFalsy()

    userEvent.click(btnTheme)

    expect(document.body.dataset.theme).toBe('light')
    expect(
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ).toBeFalsy()
  })
})
