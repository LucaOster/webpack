import { useExampleAsyncSlice } from 'store/exampleAsyncSlice'
import { useExampleLoading } from 'store/exampleLoading'
import { getClient } from 'infra/http'
import { GetClientRepositoriesType } from 'data/repositories/useGetRepositoriesWithRedux/types'

export const useGetRepositoriesWithRedux = () => {
  const { setIsLoading } = useExampleLoading()
  const { exampleAsyncSlice, setGetRepositories } = useExampleAsyncSlice()

  const getFetchRepositories = async (user: string) => {
    setIsLoading()

    const { data, error }: GetClientRepositoriesType = await getClient(
      `/users/${user}/repos`
    )
    setGetRepositories({ data, error })

    setIsLoading()
  }

  return { exampleAsyncSlice, getFetchRepositories }
}
