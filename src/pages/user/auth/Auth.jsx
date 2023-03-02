import React, { useState } from 'react'
import './auth.scss'
import Login from '../../../components/user/Sign/Login'
import SignUp from '../../../components/user/Sign/SignUp'
import ForgotPassword from '../../../components/user/forgot-password/ForgotPassword'

function Auth({ setShow }) {
    const [signUp, setSignUp] = useState(false)
    const [forgot, setForgot] = useState(false)
    return (
        <div className='auth' >
            <div className="shadow" onClick={() => {
                setForgot(false)
                setShow(false)
            }}></div>
            <div className='pages'>
                {forgot ? <ForgotPassword setShow={setShow}/> :
                    signUp ? <SignUp setSignUp={setSignUp} /> : <Login setForgot={setForgot} setShow={setShow} setSignUp={setSignUp} />}
            </div>
        </div>
    )
}

export default Auth