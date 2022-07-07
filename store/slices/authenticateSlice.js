import { createSlice } from '@reduxjs/toolkit'

const authenticateSlice = createSlice({
    name: 'authenticate',
    initialState: {
        authenticate: false
    },
    reducers: {

        setAuthenticate: (state, action) => {
            state.authenticate = action.payload
        },

    }

});

export const { setAuthenticate } = authenticateSlice.actions

export default authenticateSlice.reducer;