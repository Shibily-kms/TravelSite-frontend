import React, { useState } from 'react'
import '../Sign/style.scss'
import { toast } from 'react-toastify'
import axios from '../../../config/axios'


function ForgotPassword({ setShow }) {
    const [otp, setOtp] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [form, setForm] = useState({ password: '', cpassword: '' })
    const [emailST, setEmailST] = useState(true)
    const [otpST, setOtpST] = useState(false)
    const [passwordST, setPasswordST] = useState(false)

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleOtpChange = (e) => {
        setOtp(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        axios.post('/forgot-password', { email }).then((response) => {
            toast.success('otp send to your number')
            setEmailST(false)
            setOtpST(true)
            setMobile(response.data.mobile)
        }).catch((error) => {
            toast.error(error.response.data.message)
        })
    }

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        axios.post('/otp', { mobile, email, otp }).then((response) => {
            setOtpST(false)
            setPasswordST(true)
            console.log('Success')
        }).catch((error) => {
            toast.error(error.response.data.message)
        })
    }

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (form.password === '' || form.cpassword === '') {
            toast.error('Fill all Inputs')
        } else if (form.password !== form.cpassword) {
            toast.error('Passowrd not match')
        } else {
            axios.post('/change-password', { ...form, email }).then((response) => {
                console.log(response)
                if (response) {
                    toast.success('Password successfully Changed')
                    setShow(false)
                }
            })
        }
    }

    return (
        <div>
            <div className='sign'>
                <div className="boader">
                    <div className="head">
                        <h3>Welcome to the <span>Travel website</span></h3>
                    </div>
                    <div className="content">

                        <div className="right">
                            <div className="form">
                                <h3 style={{ textAlign: 'center' }}>Forgot Password</h3>
                                {emailST ?
                                    <form action="" onSubmit={handleEmailSubmit}>
                                        <input type="email" name='email' placeholder='Email Id' required onChange={handleEmailChange} />
                                        <button type='submit'>Submit</button>
                                    </form> : ''
                                }
                                {otpST ?
                                    <form action="" onSubmit={handleOtpSubmit}>
                                        <input type="number" name='otp' placeholder='OTP' required onChange={handleOtpChange} />
                                        <button type='submit'>Submit</button>
                                    </form> : ''
                                }
                                {passwordST ?
                                    <form action="" onSubmit={handlePasswordSubmit}>
                                        <input type="password" name='password' required placeholder='Password' onChange={handlePasswordChange} />
                                        <input type="password" name='cpassword' required placeholder='Confirm Password' onChange={handlePasswordChange} />
                                        <button type='submit'>Submit</button>
                                    </form> : ''
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword