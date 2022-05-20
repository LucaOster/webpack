import { act, renderHook } from '@testing-library/react-hooks'
import { useAnimationRender } from '..'

describe('[Hooks] useAnimationRender', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  it('should return false', () => {
    const { result } = renderHook(() =>
      useAnimationRender({ timeMilSecToRemoveComponent: 1 })
    )
    expect(result.current.isRenderComponent).toBeFalsy()
    expect(result.current.isVisible).toBeFalsy()
  })

  it('should toggle state into true and false when changeStateComponent function is called', () => {
    const { result } = renderHook(() => useAnimationRender({}))

    expect(result.current.isRenderComponent).toBeFalsy()
    expect(result.current.isVisible).toBeFalsy()

    act(() => {
      result.current.changeStateComponent()
    })

    expect(result.current.isRenderComponent).toBeTruthy()
    expect(result.current.isVisible).toBeTruthy()
  })
})
