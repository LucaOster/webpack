import { errorApi } from '..'
import { ERROR_MESSAGE } from 'constantes/errorApi'

const error = {
  response: {
    status: 200
  }
}

describe('[Util] ErrorApi', () => {
  it('should a specific error message for error statuses greater than or equal to 500', () => {
    error.response.status = 500
    const error500 = errorApi(error)
    expect(error500).toEqual(ERROR_MESSAGE.ERROR_500)
  })

  it('should a specific error message for error statuses greater than or equal to 400', () => {
    error.response.status = 400
    const error400 = errorApi(error)
    expect(error400).toEqual(ERROR_MESSAGE.ERROR_400)
  })

  it('should a specific error message for error statuses equal to 403', () => {
    error.response.status = 403
    const error403 = errorApi(error)
    expect(error403).toEqual(ERROR_MESSAGE.ERROR_403)
  })

  it('should return a generic error message for undefined error status return', () => {
    const connectionError = errorApi({ response: undefined })
    expect(connectionError).toEqual(ERROR_MESSAGE.GENERIC_ERROR)
  })

  it('should return a generic error message for generic error status return', () => {
    error.response.status = null as any
    const unknownError = errorApi(error)
    expect(unknownError).toEqual(ERROR_MESSAGE.GENERIC_ERROR)
  })
})
