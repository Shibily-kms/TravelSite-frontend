import React from 'react'
import './style.scss'
import image from '../../../assets/images/log1.png'

function SignUp({ setSignUp }) {
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
              <h3>Let’s get started!</h3>
              <form action="">
                <input type="text" name='fullName' placeholder='Full Name' />
                <input type="email" name='emailId' placeholder='Email' />
                <input type="password" name='password' placeholder='Password' />
                <input type="password" name='cpassword' placeholder='Confirm Password' />
                <input type="number" name='mobile' placeholder='+91 MobileNumber' />
                <div className="checkbox">
                  <input type="checkbox" id='check' name='check' />
                  <label htmlFor="check">I Agree to terms & conditions</label>
                </div>
                <button>Register</button>
              </form>
              <p>for existing user <span onClick={() => setSignUp(false)}>Login</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp