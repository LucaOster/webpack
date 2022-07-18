import { httpClientAdapter } from 'infra/adapters/httpClient'
import { ErrorApi } from 'types/errorApi'
import { errorApi } from 'data'
import { GetClientType } from './types'

export const getClient = async (url: string): Promise<GetClientType> => {
  try {
    const { data } = await httpClientAdapter.get(url)
    return { data, error: '' }
  } catch (e) {
    return { data: [], error: errorApi(e as ErrorApi) }
  }
}
