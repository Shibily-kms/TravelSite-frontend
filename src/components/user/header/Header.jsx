import React, { useEffect, useState } from 'react'
import './header.scss'
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaGlobe } from "@react-icons/all-files/fa/FaGlobe";
import { FaRegUser } from "@react-icons/all-files/fa/FaRegUser";
import { IoMdArrowDropdown } from "@react-icons/all-files/io/IoMdArrowDropdown";
import Auth from '../../../pages/user/auth/Auth';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../../redux/features/user/authSlice'

function Header() {
    const { user } = useSelector((state) => state.userAuth)
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
    }, [user])

    return (
        <header>
            {/* Top Bar */}
            <div className="section-one">
                <div className="left">
                    <p>Staurday Sep 10,2022 </p>
                    <p>Hollywood, America </p>
                    <p>Mon-Fri : 10 AM - 5 PM </p>
                </div>
                <div className="right">
                    <div className="social">
                        <div className="icon">
                            <FaFacebookF />
                        </div>
                        <div className="icon">
                            <FaTwitter />
                        </div>
                        <div className="icon">
                            <FaInstagram />
                        </div>
                        <div className="icon">
                            <FaLinkedinIn />
                        </div>
                    </div>
                    <div className="account">
                        <div className="icon">
                            <FaGlobe />
                            <span>English(US)</span>
                        </div>
                        <div className="icon">
                            <FaRegUser />
                            <span>User</span>
                            <IoMdArrowDropdown />
                        </div>
                    </div>
                </div>
            </div>
            {/* Header */}
            <div className="section-two">
                <div className="left">
                    <h2>Travel Site</h2>
                </div>
                <div className="right">
                    <ul>
                        <li>Home</li>
                        <li>My Bookings</li>
                        <li>About Us</li>
                        <li>Booking Support</li>
                        <li onClick={() => setShow(true)}>{user ? user.fullName : "Agent Login"}</li>
                        {user ? <li onClick={() => dispatch(logOut())}>LogOut</li> : ""}
                    </ul>
                </div>
            </div>
            <div className="login-div">
                {show ? <Auth setShow={setShow} /> : ""}
            </div>
        </header>
    )
}

export default Header