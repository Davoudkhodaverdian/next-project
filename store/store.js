import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todoSlice from './slices/todoSlice'
import userListSlice from './slices/userListSlice'
import counterSlice from './slices/counterSlice'
import authenticateSlice from './slices/authenticateSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  todo: todoSlice,
  user: userListSlice,
  counter: counterSlice,
  authenticate: authenticateSlice,
})

//without persist
// const store = configureStore({ reducer: rootReducer })
// export { store }

//with persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["authenticate"] // only this item will be persisted
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
  reducer: persistedReducer,
  //non-serializable value
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
const persistor = persistStore(store)
export { store, persistor }

