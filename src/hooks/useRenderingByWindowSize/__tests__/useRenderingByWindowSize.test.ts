import { renderHook, act } from '@testing-library/react-hooks'
import { useRenderingByWindowSize } from '..'
import T from 'theme'
import { size } from 'mocks'

describe('[Hooks] useRenderingByWindowSize', () => {
  it('should return xs to screen size up until T.windowSizes.sm', () => {
    size(T.windowSizes.sm)
    const { result } = renderHook(() => useRenderingByWindowSize())

    act(() => {
      window.dispatchEvent(new Event('resize'))
    })
    expect(result.current.windowSize.sm).toBeTruthy()
  })

  it('should return sm to screen size up until T.windowSizes.md', () => {
    size(T.windowSizes.md)
    const { result } = renderHook(() => useRenderingByWindowSize())

    act(() => {
      window.dispatchEvent(new Event('resize'))
    })
    expect(result.current.windowSize.md).toBeTruthy()
  })

  it('should return md to screen size up until T.windowSizes.lg', () => {
    size(T.windowSizes.lg)
    const { result } = renderHook(() => useRenderingByWindowSize())

    act(() => {
      window.dispatchEvent(new Event('resize'))
    })
    expect(result.current.windowSize.lg).toBeTruthy()
  })
})
