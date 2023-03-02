import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    admin: null
}


export const adminAuthSlice = createSlice({
    name: 'adminAuth',
    initialState,
    reducers: {
        logOut: (state) => {
            localStorage.removeItem('adminToken')
            state.admin = null
        },
        login: (state, action) => {
            console.log(action);
            state.admin = action.payload
        }
    }
})

export const { logOut,login } = adminAuthSlice.actions;
export default adminAuthSlice.reducer