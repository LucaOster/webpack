import { createSlice } from '@reduxjs/toolkit'
import { ExampleThemeType } from './types'

const initialState: ExampleThemeType = {
  isPrefersColorSchemeDark: false,
  isPrefersColorScheme: true,
  isDark: false
}

const exampleThemeSlice = createSlice({
  name: 'exampleTheme',
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
} = exampleThemeSlice.actions

export const exampleTheme = exampleThemeSlice.reducer
