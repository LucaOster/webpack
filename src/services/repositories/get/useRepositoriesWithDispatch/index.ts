import { useExampleAsyncSlice } from 'store/exampleAsyncSlice'
import { getRepositoriesInTheGithub } from '../api'

export const useRepositoriesWithDispatch = () => {
  const { getRepositories, repositoriesLoading, exampleAsyncSlice } =
    useExampleAsyncSlice()

  const getFetchRepositories = async (user: string) => {
    repositoriesLoading()
    const repositories = await getRepositoriesInTheGithub(user)
    getRepositories(repositories)
  }

  return { exampleAsyncSlice, getFetchRepositories }
}
