import { createSlice } from '@reduxjs/toolkit'
import { getRepositoriesInTheGithubTypes } from 'services/repositories/get/api/types'
import { PayloadType } from './types'

const initialState: getRepositoriesInTheGithubTypes = {
  isLoading: false,
  repositories: [],
  error: ''
}

const exampleAsyncSlice = createSlice({
  name: 'exampleAsync',
  initialState,
  reducers: {
    repositoriesLoading(state) {
      return { ...state, isLoading: true }
    },
    getRepositories(state, { payload }: PayloadType) {
      return { ...state, ...payload }
    }
  }
})

export const { repositoriesLoading, getRepositories } =
  exampleAsyncSlice.actions

export const exampleAsync = exampleAsyncSlice.reducer
