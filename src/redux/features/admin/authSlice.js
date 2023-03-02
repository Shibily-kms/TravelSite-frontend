import { createSlice } from '@reduxjs/toolkit'
import axios from '../../../config/axios'


const initialState = {
    admin: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}


export const adminAuthSlice = createSlice({
    name: 'adminAuth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false
            state.isLoading = false
            state.isSuccess = false
            state.message = ''
        },
        logOut: (state) => {
            state.admin = null
        },
        login: (state, action) => {
            console.log(action);
            state.admin = action.payload
        }
    },
    extraReducers: {

    }
})

export const { reset, logOut,login } = adminAuthSlice.actions;
export default adminAuthSlice.reducer