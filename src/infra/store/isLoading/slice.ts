import { createSlice } from '@reduxjs/toolkit'
import { IsLoadingType } from './types'

const initialState: IsLoadingType = false

const isLoadingSlice = createSlice({
  name: 'isLoading',
  initialState,
  reducers: {
    setIsLoading: state => !state
  }
})

export const { setIsLoading } = isLoadingSlice.actions

export const isLoading = isLoadingSlice.reducer
