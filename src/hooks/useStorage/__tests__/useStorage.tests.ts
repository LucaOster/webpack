import { act } from '@testing-library/react'
import { renderHooksProvider } from 'tests/providers'
import { useStorage } from '..'

describe('[Hooks] useStorage', () => {
  it('should to return initialValue', () => {
    const { result } = renderHooksProvider(() =>
      useStorage({ key: 'keyExample1', initialValue: 'initialValueExample' })
    )
    expect(result.current.getStorage).toBe('initialValueExample')
  })

  it('should to return initialValue and after the value of storage', () => {
    const { result } = renderHooksProvider(() =>
      useStorage({ key: 'keyExample2', initialValue: 'initialValueExample' })
    )
    expect(result.current.getStorage).toBe('initialValueExample')
    act(() => {
      result.current.setStorageState('valueExample')
    })
    expect(result.current.getStorage).toBe('valueExample')
  })

  it('should to return undefined', () => {
    const { result } = renderHooksProvider(() =>
      useStorage({ key: 'keyExample3' })
    )
    expect(result.current.getStorage).toBeUndefined()
  })

  it('should to save data', () => {
    const { result } = renderHooksProvider(() =>
      useStorage({ key: 'keyExample4' })
    )
    expect(result.current.getStorage).toBeUndefined()
    act(() => {
      result.current.setStorageState('valueExample')
    })
    expect(result.current.getStorage).toBe('valueExample')
  })
})
