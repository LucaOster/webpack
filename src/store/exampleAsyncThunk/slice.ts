import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getRepositoriesInTheGithub } from 'services/repositories/get/api'
import { getRepositoriesInTheGithubTypes } from 'services/repositories/get/api/types'
import { PayloadType } from 'store/exampleAsyncThunk/types'

const initialState: getRepositoriesInTheGithubTypes = {
  isLoading: false,
  repositories: [],
  error: ''
}

export const fetchRepositories = createAsyncThunk(
  'repositories/getRepositories',
  async (user: string) => await getRepositoriesInTheGithub(user)
)

const exampleAsyncThunkSlice = createSlice({
  name: 'exampleAsyncThunk',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRepositories.pending, state => {
        return { ...state, isLoading: true }
      })
      .addCase(
        fetchRepositories.fulfilled,
        (state, { payload }: PayloadType) => ({ ...state, ...payload })
      )
  }
})

export const exampleAsyncThunk = exampleAsyncThunkSlice.reducer
