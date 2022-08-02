export type SetThemeType = { payload: undefined; type: string } | undefined

export type UseThemeDetectType = {
  setTheme: () => void
  theme: 'dark' | 'light'
}
