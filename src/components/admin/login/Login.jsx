import React from 'react'
import './login.scss'

function Login() {
    return (
        <div className='admin-login'>
            <div className="boader">
                <h4>Admin Login</h4>
                <div className="form">
                    <form action="">
                        <div className="input-div">
                            <label htmlFor="email">Email</label>
                            <input type="email" name='Email' />
                        </div>

                        <div className="input-div">
                            <label htmlFor="password">Password</label>
                            <input type="password" name='Password' />
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