import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from 'testHelpers/providers'
import { mockedUseNavigate } from 'testHelpers/mocks'
import Home from '..'

describe('[Page] Home', () => {
  const user = userEvent.setup({ delay: null })

  beforeEach(() => {
    mockedUseNavigate.mockClear()
  })

  it('should alternate the text displayed in two h1 each time the button is clicked', async () => {
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

    await user.click(btn)
    const titleSectionStateExample2 = screen.getByRole('heading', {
      name: 'Redux Example State: true'
    })
    const titleSectionPayload2 = screen.getByRole('heading', {
      name: 'Payload: Example Text'
    })

    expect(titleSectionStateExample2).toBeInTheDocument()
    expect(titleSectionPayload2).toBeInTheDocument()

    await user.click(btn)
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
    { buttonNumber: 3 }
  ]
  dataTests.forEach(({ buttonNumber }) => {
    it(`should go to another page by clicking the button ${buttonNumber} and it should preload the next page with the onMouseEnter event`, async () => {
      renderWithProviders(<Home />)

      const btn = screen.getByRole('button', {
        name: `Page Example ${buttonNumber}`
      })
      await user.click(btn)
      await user.hover(btn)

      expect(mockedUseNavigate).toHaveBeenCalledTimes(1)
      expect(mockedUseNavigate).toHaveBeenCalledWith(
        `page-example-${buttonNumber}`
      )
    })
  })

  it('should toggle button text and data-theme value that tag body when clicking change theme button', async () => {
    renderWithProviders(<Home />)

    const btnTheme = screen.getByRole('button', { name: /theme/i })

    expect(btnTheme).toHaveTextContent('Theme light')
    expect(document.body.dataset.theme).toBe('light')
    await user.click(btnTheme)
    expect(btnTheme).toHaveTextContent('Theme dark')
    expect(document.body.dataset.theme).toBe('dark')
  })
})
