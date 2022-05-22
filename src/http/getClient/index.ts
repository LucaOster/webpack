import { api } from 'libs'
import { ErrorApi } from 'types/errorApi'
import { errorApi } from 'utils'
import { GetClientType } from './types'

export const getClient = async (url: string): Promise<GetClientType> => {
  try {
    const { data } = await api.get(url)
    return { data, error: '' }
  } catch (e) {
    return { data: [], error: errorApi(e as ErrorApi) }
  }
}
