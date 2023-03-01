import React from 'react'
import image from '../../../assets/images/log2.png'
import './style.scss'

function Login({ setSignUp }) {
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
                            <form action="">
                                <input type="email" name='emailId' placeholder='Email' />
                                <input type="password" name='password' placeholder='Password' />
                                <p>Forgot password ?</p>
                                <button>Submit</button>
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