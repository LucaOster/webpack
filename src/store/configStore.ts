import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import { persistedReducer, serializableCheck } from './persistConfig'

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck }),
  devTools: process.env.NODE_ENV !== 'production'
})

export const persistor = persistStore(store)
