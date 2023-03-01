import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/user/home/Home'

function User() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    )
}

export default User