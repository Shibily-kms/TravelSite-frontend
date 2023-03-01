import React, { useState } from 'react'
import './auth.scss'
import Login from '../../../components/user/Sign/Login'
import SignUp from '../../../components/user/Sign/SignUp'

function Auth({ setShow }) {
    const [signUp, setSignUp] = useState(true)
    return (
        <div className='auth' >
            <div className="shadow" onClick={() => setShow(false)}></div>
            <div className='pages'>
                {signUp ? <SignUp setSignUp={setSignUp} /> : <Login setSignUp={setSignUp} />}
            </div>
        </div>
    )
}

export default Auth