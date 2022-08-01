import { errorApi } from 'data'
import { httpClientAdapter } from 'infra/adapters/httpClient'
import { GetClientType } from './types'
import { ErrorApi } from 'infra/adapters/httpClient/types'

export const getClient = async (url: string): Promise<GetClientType> => {
  try {
    const { data } = await httpClientAdapter.get(url)
    return { data, error: '' }
  } catch (e) {
    return { data: [], error: errorApi(e as ErrorApi) }
  }
}
