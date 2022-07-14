import { useState } from 'react'
import { storageAdapter } from 'infra/storageAdapter'
import { useStorageProps } from './types'

export const useStorage = ({ key, initialValue, storage }: useStorageProps) => {
  const { getStorageAdapter, setStorageAdapter } = storageAdapter(storage)
  const [getStorage, setStorage] = useState(
    getStorageAdapter(key, initialValue) ?? initialValue
  )

  const setStorageState = (value: any): void => {
    setStorageAdapter(key, value)
    setStorage(value)
  }

  return { getStorage, setStorageState }
}
