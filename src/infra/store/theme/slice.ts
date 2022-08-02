import { createSlice } from '@reduxjs/toolkit'
import { ThemeType } from './types'

const initialState: ThemeType = {
  isDark: false
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state) {
      state.isDark = !state.isDark
    }
  }
})

export const { setTheme } = themeSlice.actions

export const theme = themeSlice.reducer
