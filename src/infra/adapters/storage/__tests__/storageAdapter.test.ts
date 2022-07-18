import { storageAdapter } from '..'

describe('[infra] storageAdapter', () => {
  afterEach(() => {
    localStorage.clear()
    sessionStorage.clear()
  })

  it('should to return the existing value in the storage if it exists and not overwrite with initialValue', () => {
    localStorage.setItem('keyExample', JSON.stringify('prevValue'))
    const { getStorageAdapter } = storageAdapter()
    expect(getStorageAdapter('keyExample', 'initialValueExample')).toBe(
      'prevValue'
    )
  })

  it('should return initialValue', () => {
    const { getStorageAdapter } = storageAdapter()
    expect(getStorageAdapter('keyExample', 'initialValueExample')).toBe(
      'initialValueExample'
    )
  })

  it('should return a number', () => {
    const { getStorageAdapter, setStorageAdapter } = storageAdapter()
    setStorageAdapter('keyExample', 22)
    expect(getStorageAdapter('keyExample')).toBe(22)
  })

  it('should return a string', () => {
    const { getStorageAdapter, setStorageAdapter } = storageAdapter()
    setStorageAdapter('keyExample', 'example')
    expect(getStorageAdapter('keyExample')).toBe('example')
  })

  it('should return undefined', () => {
    const { getStorageAdapter, setStorageAdapter } = storageAdapter()
    setStorageAdapter('keyExample', undefined)
    expect(getStorageAdapter('keyExample')).toBeUndefined()
    setStorageAdapter('keyExample2', null)
    expect(getStorageAdapter('keyExample2')).toBeUndefined()
  })

  it('should return a array', () => {
    const { getStorageAdapter, setStorageAdapter } = storageAdapter()
    setStorageAdapter('keyExample', [])
    expect(getStorageAdapter('keyExample')).toStrictEqual([])
  })

  it('should return a object', () => {
    const { getStorageAdapter, setStorageAdapter } = storageAdapter()
    setStorageAdapter('keyExample', {})
    expect(getStorageAdapter('keyExample')).toStrictEqual({})
  })

  it('should to record and return a value of the sessionStorage', () => {
    const { getStorageAdapter, setStorageAdapter } =
      storageAdapter('sessionStorage')
    setStorageAdapter('keyExample', 555)
    expect(getStorageAdapter('keyExample')).toBe(555)
  })

  it('should to remove a item of the storage', () => {
    const { getStorageAdapter, setStorageAdapter, removeItemOfStorageAdapter } =
      storageAdapter()
    setStorageAdapter('keyExample', 'example')
    setStorageAdapter('keyExample2', 'example2')
    expect(getStorageAdapter('keyExample')).toBe('example')
    expect(getStorageAdapter('keyExample2')).toBe('example2')
    removeItemOfStorageAdapter('keyExample')
    expect(getStorageAdapter('keyExample')).toBeUndefined()
    expect(getStorageAdapter('keyExample2')).toBe('example2')
  })

  it('should to remove all items of the storage', () => {
    const { getStorageAdapter, setStorageAdapter, clearStorageAdapter } =
      storageAdapter()
    setStorageAdapter('keyExample', 'example')
    setStorageAdapter('keyExample2', 'example2')
    expect(getStorageAdapter('keyExample')).toBe('example')
    expect(getStorageAdapter('keyExample2')).toBe('example2')
    clearStorageAdapter()
    expect(getStorageAdapter('keyExample')).toBeUndefined()
    expect(getStorageAdapter('keyExample2')).toBeUndefined()
  })
})
