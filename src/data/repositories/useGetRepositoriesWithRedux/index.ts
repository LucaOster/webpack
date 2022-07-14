import { useExampleAsyncAdapter } from 'infra/store/exampleAsyncSlice/useAdapter'
import { useExampleLoadingAdapter } from 'infra/store/exampleLoading/useAdapter'
import { getClient } from 'infra/http'
import { GetClientRepositoriesType } from './types'

export const useGetRepositoriesWithRedux = () => {
  const { setIsLoading } = useExampleLoadingAdapter()
  const { exampleAsyncSlice, setGetRepositories } = useExampleAsyncAdapter()

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
