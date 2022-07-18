import { createSlice } from '@reduxjs/toolkit'
import { ThemeType } from './types'

const initialState: ThemeType = {
  isPrefersColorSchemeDark: false,
  isPrefersColorScheme: true,
  isDark: false
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setIsPrefersColorSchemeDark(state) {
      const isClientBrowser = typeof window === 'object'
      state.isPrefersColorSchemeDark =
        isClientBrowser &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    },
    setChangeTheme(state) {
      state.isDark = !state.isDark
    },
    setIsPrefersColorScheme(state) {
      state.isPrefersColorScheme = false
    }
  }
})

export const {
  setIsPrefersColorSchemeDark,
  setChangeTheme,
  setIsPrefersColorScheme
} = themeSlice.actions

export const theme = themeSlice.reducer
