import { createSlice } from '@reduxjs/toolkit'

const authenticateSlice = createSlice({
    name: 'authenticate',
    initialState: {
        authenticate: false,
    },
    reducers: {

        setAuthenticate: (state, action) => {
            state.authenticate = action.payload
        },

        setRegisterAlert: (state, action) => {
            state.register = action.payload
        },
        
        setLoginAlert: (state, action) => {
            state.login = action.payload
        },
        
        setLogoutAlert: (state, action) => {
            state.logout = action.payload
        },
    }

});

export const { setAuthenticate,setRegisterAlert,setLoginAlert, setLogoutAlert} = authenticateSlice.actions

export default authenticateSlice.reducer;