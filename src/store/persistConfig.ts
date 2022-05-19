import { combineReducers } from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist'
import asyncSessionStorage from 'redux-persist/lib/storage'
import * as Reducers from './reducers'

const whitelist = ['exampleSimple', 'exampleWithPayload', 'exampleTheme']

const persistConfig = {
  key: 'root',
  storage: asyncSessionStorage,
  whitelist
}

const rootReducer = combineReducers({ ...Reducers })

export const persistedReducer = persistReducer(persistConfig, rootReducer)

export const serializableCheck = {
  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
}
