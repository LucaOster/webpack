import { createSlice } from '@reduxjs/toolkit'
import { getRepositoriesInTheGithubTypes, PayloadType } from './types'

const initialState: getRepositoriesInTheGithubTypes = {
  repositories: [],
  error: ''
}

const exampleAsyncSlice = createSlice({
  name: 'exampleAsync',
  initialState,
  reducers: {
    setGetRepositories(state, { payload }: PayloadType) {
      return { ...state, ...payload }
    }
  }
})

export const { setGetRepositories } = exampleAsyncSlice.actions

export const exampleAsync = exampleAsyncSlice.reducer
