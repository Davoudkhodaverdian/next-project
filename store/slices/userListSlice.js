import { createSlice } from '@reduxjs/toolkit'

const userLstSlice = createSlice({
  name: 'user',
  initialState: {
    list: []
  },
  reducers: {

    setUser: (state, { payload }) => {
      state.list = payload;
    },
    addUser: (state, action) => {

      state.list.push(action.payload)
    },
    removeUser: (state, action) => {

      state.list = state.list.filter(item => item.id !== action.payload)
    },
    editUser: (state, action) => {
      
      let { dataChanged } = action.payload
      let data = state.list.map(item => {
        if (item.id === dataChanged.id) {
          ["name", "membershipDate", "email", "role", "title", "field", "age", "workExperience", "userPassword"].forEach(nameItem => {
            item[nameItem] = (nameItem === "userPassword"|| nameItem === "id") ? item[nameItem] : dataChanged[nameItem]
          })
        }
        return item
      })
      state.list = data
    },

  }

});

export const { addUser, setUser, editUser, removeUser } = userLstSlice.actions

export default userLstSlice.reducer;