import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null
}


export const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {

        logOut: (state) => {
            localStorage.removeItem('userToken')
            state.user = null
        },
        login: (state, action) => {
            state.user = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        }
    }

})

export const { logOut, login,setUser } = userAuthSlice.actions;
export default userAuthSlice.reducer