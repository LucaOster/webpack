import { createSlice } from '@reduxjs/toolkit'
import { ExampleThemeType } from './types'

const initialState: ExampleThemeType = {
  isDark: false,
  isPrefersColorScheme: true
}

const exampleThemeSlice = createSlice({
  name: 'exampleTheme',
  initialState,
  reducers: {
    setChangeTheme(state) {
      state.isDark = !state.isDark
    },
    setPrefersColorScheme(state) {
      state.isPrefersColorScheme = false
    }
  }
})

export const { setChangeTheme, setPrefersColorScheme } =
  exampleThemeSlice.actions

export const exampleTheme = exampleThemeSlice.reducer
