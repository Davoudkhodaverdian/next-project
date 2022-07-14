import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    list: []
  },
  reducers: {
    setTodo: (state, {payload}) => {
      state.list = payload;
    }, 
    addTodo: (state, action) => {
      state.list.push(action.payload)
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter(item => item.id !== action.payload)
    },
    toggleDoneTodo: (state, action) => {
      let data = state.list.map(item => {
        if (item.id === action.payload) item.done = !item.done
        return item
      })
      state.list = data
    },
    editTodo: (state, action) => {
      
      let data = state.list.map(item => {
        if (item.id === action.payload.id) item.text = action.payload.text
        return item
      })
      state.list = data
    },
  }

});

export const { addTodo, removeTodo, toggleDoneTodo, editTodo,setTodo } = todoSlice.actions

export default todoSlice.reducer;