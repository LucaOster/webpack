import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import { persistedReducer, serializableCheck } from './persistConfig'

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck })
})

export const persistor = persistStore(store)
