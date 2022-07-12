import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
    name: 'showModal',
    initialState: {
        show: false
    },
    reducers: {
        setShow: (state, action) => { state.show = action.payload }
    }

});

export const { setShow } = modalSlice.actions
export default modalSlice.reducer;