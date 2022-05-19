import { act, renderHook } from '@testing-library/react-hooks'
import { wrapper } from 'utils'
import { useThemeDetect } from '..'

describe('[Hooks] useThemeDetect', () => {
  it('should switch theme between dar and light when calling setTheme', () => {
    const { result } = renderHook(() => useThemeDetect(), { wrapper })

    expect(result.current.showThemeToSelect).toBe('dark')

    act(() => {
      result.current.setTheme()
    })
    expect(result.current.showThemeToSelect).toBe('light')

    act(() => {
      result.current.setTheme()
    })
    expect(result.current.showThemeToSelect).toBe('dark')
  })
})
