import { createSlice } from '@reduxjs/toolkit'
import { ExampleSimpleType } from './types'

const initialState: ExampleSimpleType = {
  toggle: false
}

const exampleSimpleSlice = createSlice({
  name: 'exampleSimple',
  initialState,
  reducers: {
    setChangeExample(state) {
      state.toggle = !state.toggle
    }
  }
})

export const { setChangeExample } = exampleSimpleSlice.actions

export const exampleSimple = exampleSimpleSlice.reducer
