import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: "light"
  },
  reducers: {

    toggleTheme: (state, action) => {

      state.theme = action.payload;
      const root = document.documentElement
      if (action.payload === "dark") root.classList.add('dark');
      else root.classList.remove('dark');

    }
  }

});

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer;