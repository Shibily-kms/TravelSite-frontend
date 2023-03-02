import React, { useState } from 'react'
import image from '../../../assets/images/log2.png'
import './style.scss'
import { toast } from 'react-toastify'
import axios from '../../../config/axios'
import { login } from '../../../redux/features/user/authSlice'
import { useDispatch } from 'react-redux'
function Login({ setShow, setSignUp }) {
    const [form, setForm] = useState({ email: "", password: "" })
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (form.email === "" || form.password === "") {
            toast.error('Fill all Inputs')
        } else {
            axios.post('/login', form).then((response) => {
                dispatch(login(response.data.user))
                localStorage.setItem('userToken', response.data.token)
                setShow(false)
                toast.success('Successfully Loged')
            }).catch((error) => {
                toast.error(error.response.data.message)
            })
        }
    }
    return (
        <div className='sign'>
            <div className="boader">
                <div className="head">
                    <h3>Welcome to the <span>Travel website</span></h3>
                </div>
                <div className="content">
                    <div className="left">
                        <img src={image} alt="" />
                    </div>
                    <div className="right">
                        <div className="form">
                            <h3>Login</h3>
                            <form action="" onSubmit={handleSubmit}>
                                <input type="email" name='email' placeholder='Email' onChange={handleChange} />
                                <input type="password" name='password' placeholder='Password' onChange={handleChange} />
                                <p>Forgot password ?</p>
                                <button type='submit'>Submit</button>
                            </form>
                            <p>New User ? Click Here to <span onClick={() => setSignUp(true)}>Register</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login