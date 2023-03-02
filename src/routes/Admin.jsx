import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../components/admin/dashboard/Dashboard'
import Holiday from '../pages/admin/holiday/Holiday'
import Auth from '../pages/admin/auth/Auth'
import Video from '../pages/admin/video/Video'
import Popular from '../pages/admin/popular/Popular'




function Admin() {

    return (
        <Routes>
            <Route path='/login' element={<Auth />} />
            <Route path='/' element={<Dashboard />} />
            <Route path='/perfect-holiday' element={<Holiday />} />
            <Route path='/video' element={<Video />} />
            <Route path='/popular-flight' element={<Popular />} />
        </Routes>
    )
}

export default Admin