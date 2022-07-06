import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todoSlice from './slices/todoSlice'
import userListSlice from './slices/userListSlice'
import counterSlice from './slices/counterSlice'
import authenticateSlice from './slices/authenticateSlice'


const rootReducer = combineReducers({
  todo: todoSlice,
  user: userListSlice,
  counter: counterSlice,
  authenticate: authenticateSlice,
})

const store = configureStore({ reducer: rootReducer })

export { store }


