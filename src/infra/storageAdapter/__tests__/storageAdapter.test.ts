import { storageAdapter } from '..'

describe('[infra] storageAdapter', () => {
  it('should return initialValue', () => {
    const { getStorageAdapter } = storageAdapter()
    expect(getStorageAdapter('keyExample1', 'initialValueExample')).toBe(
      'initialValueExample'
    )
  })

  it('should return a number', () => {
    const { getStorageAdapter, setStorageAdapter } = storageAdapter()
    setStorageAdapter('keyExample2', 22)
    expect(getStorageAdapter('keyExample2')).toBe(22)
  })

  it('should return a string', () => {
    const { getStorageAdapter, setStorageAdapter } = storageAdapter()
    setStorageAdapter('keyExample3', 'example')
    expect(getStorageAdapter('keyExample3')).toBe('example')
  })

  it('should return undefined', () => {
    const { getStorageAdapter, setStorageAdapter } = storageAdapter()
    setStorageAdapter('keyExample4', undefined)
    expect(getStorageAdapter('keyExample4')).toBeUndefined()
    setStorageAdapter('keyExample5', null)
    expect(getStorageAdapter('keyExample5')).toBeUndefined()
  })

  it('should return a array', () => {
    const { getStorageAdapter, setStorageAdapter } = storageAdapter()
    setStorageAdapter('keyExample6', [])
    expect(getStorageAdapter('keyExample6')).toStrictEqual([])
  })

  it('should return a object', () => {
    const { getStorageAdapter, setStorageAdapter } = storageAdapter()
    setStorageAdapter('keyExample7', {})
    expect(getStorageAdapter('keyExample7')).toStrictEqual({})
  })

  it('should to record and return a value of the sessionStorage', () => {
    const { getStorageAdapter, setStorageAdapter } =
      storageAdapter('sessionStorage')
    setStorageAdapter('keyExample8', 555)
    expect(getStorageAdapter('keyExample8')).toBe(555)
  })

  it('should to remove a item of the storage', () => {
    const { getStorageAdapter, setStorageAdapter, removeItemOfStorageAdapter } =
      storageAdapter()
    setStorageAdapter('keyExample9', 'example')
    setStorageAdapter('keyExample10', 'example2')
    expect(getStorageAdapter('keyExample9')).toBe('example')
    expect(getStorageAdapter('keyExample10')).toBe('example2')
    removeItemOfStorageAdapter('keyExample9')
    expect(getStorageAdapter('keyExample9')).toBeUndefined()
    expect(getStorageAdapter('keyExample10')).toBe('example2')
  })

  it('should to remove all items of the storage', () => {
    const { getStorageAdapter, setStorageAdapter, clearStorageAdapter } =
      storageAdapter()
    setStorageAdapter('keyExample11', 'example')
    setStorageAdapter('keyExample12', 'example2')
    expect(getStorageAdapter('keyExample11')).toBe('example')
    expect(getStorageAdapter('keyExample12')).toBe('example2')
    clearStorageAdapter()
    expect(getStorageAdapter('keyExample11')).toBeUndefined()
    expect(getStorageAdapter('keyExample12')).toBeUndefined()
  })
})
