const getFetchRepositories = jest.fn()
export const useExampleAsyncSlice1 = {
  getFetchRepositories,
  exampleAsyncSlice: {
    repositories: [{ name: 'example1' }, { name: 'example2' }],
    error: ''
  }
}
export const useExampleAsyncSlice2 = {
  getFetchRepositories,
  exampleAsyncSlice: {
    repositories: [],
    error: 'Not found'
  }
}
export const useExampleAsyncSlice3 = {
  getFetchRepositories,
  exampleAsyncSlice: {
    repositories: [],
    error: ''
  }
}
