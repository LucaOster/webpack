const setFetchRepositories = jest.fn()
export const useExampleAsyncThunk1 = {
  setFetchRepositories,
  exampleAsyncThunk: {
    isLoading: false,
    repositories: [{ name: 'example1' }, { name: 'example2' }],
    error: ''
  }
}
export const useExampleAsyncThunk2 = {
  setFetchRepositories,
  exampleAsyncThunk: {
    isLoading: false,
    repositories: [],
    error: 'Not found'
  }
}
export const useExampleAsyncThunk3 = {
  setFetchRepositories,
  exampleAsyncThunk: {
    isLoading: true,
    repositories: [],
    error: ''
  }
}
