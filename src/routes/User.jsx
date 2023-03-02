import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/user/home/Home'
import axios from '../config/axios'
import { setUser } from '../redux/features/user/authSlice'

function User() {
    const { user } = useSelector((state) => state.userAuth)
    const dispatch = useDispatch()
    useEffect(() => {
        if (!user && localStorage.getItem('userToken')) {
            axios.get('/user', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('userToken')}`
                }
            }).then((response) => {
                dispatch(setUser(response.data.user))
            })
        }
    }, [])
    return (
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    )
}

export default User