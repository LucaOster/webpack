import { createSlice } from '@reduxjs/toolkit'
import { ExampleWithPayloadType, PayloadType } from './types'

const initialState: ExampleWithPayloadType = {
  text: ''
}

const exampleWithPayloadSlice = createSlice({
  name: 'exampleWithPayload',
  initialState,
  reducers: {
    setAddText(state, { payload }: PayloadType) {
      state.text = payload.exemploText
    },
    setRemoveText(state) {
      state.text = ''
    }
  }
})

export const { setAddText, setRemoveText } = exampleWithPayloadSlice.actions

export const exampleWithPayload = exampleWithPayloadSlice.reducer
