import React, { useState } from 'react'
import './style.scss'
import image from '../../../assets/images/log1.png'
import { toast } from 'react-toastify'
import axios from '../../../config/axios'

function SignUp({ setSignUp }) {
  const [form, setForm] = useState({ fullName: "", email: "", password: "", cpassword: "", mobile: "" })
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.fullName === "" || form.email === "" || form.password === "" || form.cpassword === "" || form.mobile === "") {
      toast.error('Fill all Inputs')
    } else if (form.password !== form.cpassword) {
      toast.error('Password not match')
    } else if (form.mobile.length !== 10) {
      toast.error('Mobile number not ready')
    } else {
      axios.post('/sign-up', form).then((response) => {
        toast.success(response.data.message+', Login Now')
        setSignUp(false)
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
              <h3>Let’s get started!</h3>
              <form action="" onSubmit={handleSubmit}>
                <input type="text" name='fullName' placeholder='Full Name' onChange={handleChange} />
                <input type="email" name='email' placeholder='Email' onChange={handleChange} />
                <input type="password" name='password' placeholder='Password' onChange={handleChange} />
                <input type="password" name='cpassword' placeholder='Confirm Password' onChange={handleChange} />
                <input type="number" name='mobile' placeholder='MobileNumber' onChange={handleChange} />
                <div className="checkbox">
                  <input type="checkbox" id='check' name='check' required />
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