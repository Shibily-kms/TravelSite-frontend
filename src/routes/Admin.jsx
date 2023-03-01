import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../components/admin/dashboard/Dashboard'

function Admin() {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/perfect-holiday' element={<Dashboard />} />
            <Route path='/video' element={<Dashboard />} />
            <Route path='/popular-flight' element={<Dashboard />} />
        </Routes>
    )
}

export default Admin