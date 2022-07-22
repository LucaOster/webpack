import { renderHooksProvider } from 'testHelpers/providers'
import { useSetPageTitle } from '..'

describe('[Hooks] useSetPageTitle', () => {
  it('should set page title equal to pageTitle prop', () => {
    const mockPageTitle = 'Example Page Test'
    renderHooksProvider(() => useSetPageTitle({ pageTitle: mockPageTitle }))
    expect(document.title).toEqual(mockPageTitle)
  })
})
