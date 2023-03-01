import { configureStore } from '@reduxjs/toolkit'
import adminAuthReducer from '../features/admin/authSlice'



export const store = configureStore({
    reducer: {
        // Admin
        adminAuth: adminAuthReducer

    }
})