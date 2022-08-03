import { configureStore, combineReducers } from '@reduxjs/toolkit'
// import loginSlice from './features/login/login'
// import registerSlice from './features/register/register'
import chatSlice from './features/chat/chat'
import userSlice from './features/user/user'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers({ user: userSlice, chat: chatSlice })

const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default configureStore({
//   reducer: {
//     login: loginSlice,
//     register: registerSlice,
//     chat: chatSlice,
//     user: userSlice,
//   },
// })
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export let persistor = persistStore(store)
