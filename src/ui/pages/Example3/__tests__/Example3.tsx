import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from 'testHelpers/providers'
import { mockedUseNavigate } from 'testHelpers/mocks'
import Example3 from '..'
import * as mock from 'ui/pages/Example3/mocks/mockedUseExampleAsyncSlice'
import * as store from 'infra/store/isLoading/useAdapter'

let mockedUseExampleAsyncSlice = mock.useExampleAsyncSlice1
jest.mock('data', () => ({
  useGetRepositoriesWithRedux: () => mockedUseExampleAsyncSlice
}))
const verifyCall = jest.spyOn(
  mockedUseExampleAsyncSlice,
  'getFetchRepositories'
)

describe('[Page] Example3', () => {
  const user = userEvent.setup({ delay: null })
  afterEach(() => jest.clearAllMocks())

  it('should render initially "Search Repository" button as disabled and enable when there is text in input, should also not call "searchRepositories" when clicked in disabled state', async () => {
    renderWithProviders(<Example3 />)

    const btn = screen.getByRole('button', { name: /search repositories/i })
    const input = screen.getByRole('textbox')
    await user.click(btn)

    expect(btn).toBeDisabled()
    expect(mock.getFetchRepositories).toHaveBeenCalledTimes(0)
    await user.type(input, 'any_user')
    await user.click(btn)
    expect(btn).toBeEnabled()
    expect(mock.getFetchRepositories).toHaveBeenCalledTimes(1)
  })

  it('should render "Search Repository" button as disabled when deleting all characters from input', async () => {
    renderWithProviders(<Example3 />)

    const btn = screen.getByRole('button', { name: /search repositories/i })
    const input = screen.getByRole('textbox')
    await user.type(input, 'any_use')

    expect(btn).toBeEnabled()
    await user.type(input, 'any_user')
    expect(btn).toBeEnabled()
    await user.clear(input)
    expect(btn).toBeDisabled()
  })

  it('should keep the "Search Repository" button disabled when typing only spaces', async () => {
    renderWithProviders(<Example3 />)

    const btn = screen.getByRole('button', { name: /search repositories/i })
    const input = screen.getByRole('textbox')
    await user.type(input, ' ')

    expect(btn).toBeDisabled()
    await user.type(input, '  ')
    expect(btn).toBeDisabled()
    await user.clear(input)
    expect(btn).toBeDisabled()
  })

  it('should render list of repositories when clicking "Search Repository" button if user in text field exists and if isLoading is false', async () => {
    renderWithProviders(<Example3 />)

    const btn = screen.getByRole('button', { name: /search repositories/i })
    const repositoryListText1 = screen.getByText('example1')
    const repositoryListText2 = screen.getByText('example2')
    const input = screen.getByRole('textbox')
    await user.type(input, 'any_user')
    await user.click(btn)

    expect(verifyCall).toHaveBeenCalledTimes(1)
    expect(repositoryListText1).toBeInTheDocument()
    expect(repositoryListText2).toBeInTheDocument()
  })

  it('should go to another page by clicking the button', async () => {
    renderWithProviders(<Example3 />)

    const btn = screen.getByRole('button', { name: 'Return' })
    await user.click(btn)
    await user.hover(btn)

    expect(mockedUseNavigate).toHaveBeenCalledTimes(1)
    expect(mockedUseNavigate).toHaveBeenCalledWith('/')
  })

  it('should render loading when clicking "Search Repository" button while isLoading for true', () => {
    mockedUseExampleAsyncSlice = mock.useExampleAsyncSlice3
    const spy = jest.spyOn(store, 'useIsLoading').mockReturnValue({
      isLoading: true,
      setIsLoading: jest.fn()
    })
    renderWithProviders(<Example3 />)

    const loading = screen.getByRole('heading', { name: 'loading...' })
    const repositoryListText1 = screen.queryByText('example1')
    const repositoryListText2 = screen.queryByText('example2')

    expect(loading).toBeInTheDocument()
    expect(repositoryListText1).not.toBeInTheDocument()
    expect(repositoryListText2).not.toBeInTheDocument()

    spy.mockRestore()
  })

  it('should render error message to clicking "Search Repository" button if user in text field not exists and if isLoading is false', async () => {
    mockedUseExampleAsyncSlice = mock.useExampleAsyncSlice2
    renderWithProviders(<Example3 />)

    const btn = screen.getByRole('button', { name: /search repositories/i })
    const error = screen.getByText(/not found/i)
    const repositoryListText1 = screen.queryByText('example1')
    const repositoryListText2 = screen.queryByText('example2')
    const input = screen.getByRole('textbox')
    await user.type(input, 'any_user')
    await user.click(btn)

    expect(error).toBeInTheDocument()
    expect(verifyCall).toHaveBeenCalledTimes(1)
    expect(repositoryListText1).not.toBeInTheDocument()
    expect(repositoryListText2).not.toBeInTheDocument()
  })

  it('should not take any action if the text input is empty', async () => {
    renderWithProviders(<Example3 />)

    const btn = screen.getByRole('button', { name: /search repositories/i })
    const error = screen.getByText(/not found/i)
    const repositoryListText1 = screen.queryByText('example1')
    const repositoryListText2 = screen.queryByText('example2')
    await user.click(btn)

    expect(verifyCall).toHaveBeenCalledTimes(0)
    expect(repositoryListText1).not.toBeInTheDocument()
    expect(repositoryListText2).not.toBeInTheDocument()
    expect(error).toBeInTheDocument()
  })
})
