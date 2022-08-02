import { act } from '@testing-library/react'
import { renderHooksProvider } from 'testHelpers/providers'
import { useThemeDetect } from '..'

describe('[Hooks] useThemeDetect', () => {
  it('should start with the clear theme and switch theme between dark and light when calling setTheme and toggle data-theme attribute in body', () => {
    const { result } = renderHooksProvider(() => useThemeDetect())
    expect(result.current.theme).toBe('light')
    expect(document.body.dataset.theme).toBe('light')

    act(() => result.current.setTheme())

    expect(result.current.theme).toBe('dark')
    expect(document.body.dataset.theme).toBe('dark')

    act(() => {
      result.current.setTheme()
    })

    expect(result.current.theme).toBe('light')
    expect(document.body.dataset.theme).toBe('light')
  })
})
