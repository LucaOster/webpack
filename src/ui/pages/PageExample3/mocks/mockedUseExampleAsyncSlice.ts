const getFetchRepositories = jest.fn()
export const useExampleAsyncSlice1 = {
  getFetchRepositories,
  exampleAsyncSlice: {
    data: [{ name: 'example1' }, { name: 'example2' }],
    error: ''
  }
}
export const useExampleAsyncSlice2 = {
  getFetchRepositories,
  exampleAsyncSlice: {
    data: [],
    error: 'Not found'
  }
}
export const useExampleAsyncSlice3 = {
  getFetchRepositories,
  exampleAsyncSlice: {
    data: [],
    error: ''
  }
}
