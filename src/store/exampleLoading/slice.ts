import { createSlice } from '@reduxjs/toolkit'
import { ExampleLoadingType } from './types'

const initialState: ExampleLoadingType = {
  isLoading: false
}

const exampleIsLoadingSlice = createSlice({
  name: 'exampleLoading',
  initialState,
  reducers: {
    setIsLoading(state) {
      state.isLoading = !state.isLoading
    }
  }
})

export const { setIsLoading } = exampleIsLoadingSlice.actions

export const exampleLoading = exampleIsLoadingSlice.reducer
