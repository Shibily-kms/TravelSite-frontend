import React, { useEffect, useState } from 'react'
import './login.scss'
import { toast } from 'react-toastify'
import axios from '../../../config/axios'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../../redux/features/admin/authSlice'

function Login() {
    const [form, setForm] = useState({ email: '', password: '' })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.email === '' || form.password === '') {
            toast.error('Fill all inputs')
        } else {
            axios.post('/admin/login', form).then((response) => {
                dispatch(login(response.data.admin))
                localStorage.setItem('adminToken', response.data.admin.token)
                navigate('/admin')
            }).catch((error) => {
                toast.error(error.response.data.message)
            })
        }
    }
    useEffect(() => {
        if (localStorage.getItem('adminToken')) {
            navigate('/admin')
        }
    }, [])
    return (
        <div className='admin-login'>
            <div className="boader">
                <h4>Admin Login</h4>
                <div className="form">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="input-div">
                            <label htmlFor="email">Email</label>
                            <input type="email" onChange={handleChange} name='email' />
                        </div>

                        <div className="input-div">
                            <label htmlFor="password">Password</label>
                            <input type="password" onChange={handleChange} name='password' />
                        </div>
                        <div>
                            <button type='submit'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login