import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../components/admin/dashboard/Dashboard'
import Holiday from '../pages/admin/holiday/Holiday'
import Auth from '../pages/admin/auth/Auth'




function Admin() {

    return (
        <Routes>
            <Route path='/login' element={<Auth />} />
            <Route path='/' element={<Dashboard />} />
            <Route path='/perfect-holiday' element={<Holiday />} />
            <Route path='/video' element={<Dashboard />} />
            <Route path='/popular-flight' element={<Dashboard />} />
        </Routes>
    )
}

export default Admin