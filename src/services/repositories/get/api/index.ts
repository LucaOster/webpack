import { api } from 'libs'
import { ErrorApi } from 'types/errorApi'
import { errorApi } from 'utils'
import { getRepositoriesInTheGithubTypes } from './types'

export const getRepositoriesInTheGithub = async (
  user: string
): Promise<getRepositoriesInTheGithubTypes> => {
  try {
    const { data } = await api.get(`/users/${user}/repos`)

    return {
      repositories: data,
      error: '',
      isLoading: false
    }
  } catch (e) {
    return {
      repositories: [],
      error: errorApi(e as ErrorApi),
      isLoading: false
    }
  }
}
