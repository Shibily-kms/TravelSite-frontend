import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.scss'

function Header() {
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
                        <li><NavLink to='#' >LogOut</NavLink></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header