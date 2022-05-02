const getFetchRepositories = jest.fn()
export const useExampleAsyncSlice1 = {
  getFetchRepositories,
  exampleAsyncSlice: {
    isLoading: false,
    repositories: [{ name: 'example1' }, { name: 'example2' }],
    error: ''
  }
}
export const useExampleAsyncSlice2 = {
  getFetchRepositories,
  exampleAsyncSlice: {
    isLoading: false,
    repositories: [],
    error: 'Not found'
  }
}
export const useExampleAsyncSlice3 = {
  getFetchRepositories,
  exampleAsyncSlice: {
    isLoading: true,
    repositories: [],
    error: ''
  }
}
