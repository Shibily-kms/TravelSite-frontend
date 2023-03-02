import { configureStore } from '@reduxjs/toolkit'
import adminAuthReducer from '../features/admin/authSlice'
import userAuthReducer from '../features/user/authSlice'



export const store = configureStore({
    reducer: {
        // Admin
        adminAuth: adminAuthReducer,

        // User
        userAuth: userAuthReducer

    }
})