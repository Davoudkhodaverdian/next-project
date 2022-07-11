import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todoSlice from './slices/todoSlice'
import userListSlice from './slices/userListSlice'
import currentUserSlice from './slices/currentUserSlice'
import counterSlice from './slices/counterSlice'
import authenticateSlice from './slices/authenticateSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const rootReducer = combineReducers({
  todo: todoSlice,
  user: userListSlice,
  counter: counterSlice,
  authenticate: authenticateSlice,
  currentUser: currentUserSlice,
})

//without persist
// const store = configureStore({ reducer: rootReducer })
// export { store }

//with persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["authenticate","currentUser"] // only this item will be persisted
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
  reducer: persistedReducer,
  //non-serializable value
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false, }),
});

const persistor = persistStore(store)
export { store, persistor }

