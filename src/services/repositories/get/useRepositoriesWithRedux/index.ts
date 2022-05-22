import { useExampleAsyncSlice } from 'store/exampleAsyncSlice'
import { useExampleLoading } from 'store/exampleLoading'
import { getClient } from 'http/getClient'
import { GetClientRepositoriesType } from './types'

export const useRepositoriesWithRedux = () => {
  const { setIsLoading } = useExampleLoading()
  const { exampleAsyncSlice, setGetRepositories } = useExampleAsyncSlice()

  const getFetchRepositories = async (user: string) => {
    setIsLoading()

    const { data: repositories, error }: GetClientRepositoriesType =
      await getClient(`/users/${user}/repos`)
    setGetRepositories({ repositories, error })

    setIsLoading()
  }

  return { exampleAsyncSlice, getFetchRepositories }
}
