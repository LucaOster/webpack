import { store } from './configStore'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
