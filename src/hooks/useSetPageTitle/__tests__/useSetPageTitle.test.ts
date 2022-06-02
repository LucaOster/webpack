import { renderHook } from '@testing-library/react'
import { useSetPageTitle } from '..'

describe('[Hooks] useSetPageTitle', () => {
  it('should set page title equal to pageTitle prop', () => {
    const mockPageTitle = 'Example Page Test'
    renderHook(() => useSetPageTitle({ pageTitle: mockPageTitle }))
    expect(document.title).toEqual(mockPageTitle)
  })
})
