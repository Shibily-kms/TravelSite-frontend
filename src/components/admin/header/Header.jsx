import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './header.scss'
import { useDispatch } from 'react-redux'
import { logOut } from '../../../redux/features/admin/authSlice'

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(logOut())
        localStorage.removeItem('adminToken')
        navigate('/admin/login')
    }
    useEffect(() => {
        if (!localStorage.getItem('adminToken')) {
            navigate('/admin/login')
        }
    }, [])
    return (
        <header className='admin-header'>
            <div className="section-one">
                <div className="left">
                    <h2>Admin Panel</h2>
                </div>
                <div className="right">
                    <ul>
                        <li><NavLink to='/admin' end>Dashboard</NavLink></li>
                        <li><NavLink to='/admin/perfect-holiday'>Perfect holiday</NavLink></li>
                        <li><NavLink to='/admin/video'>Video</NavLink></li>
                        <li><NavLink to='/admin/popular-flight'>Popular flight</NavLink></li>
                        <li onClick={handleLogOut}><NavLink to='#'>LogOut</NavLink></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header