import React from 'react'
import './footer.scss'
import { FiMail } from 'react-icons/fi';
import { AiOutlineMobile } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaGlobe } from "@react-icons/all-files/fa/FaGlobe";

function Footer() {
    return (
        <div className='footer'>
            <div className="content">
                <div className="left">
                    <h2>Travel Site</h2>
                    <p>Travelsite is a leading online travel agency providing competitive fares, cutting edge
                        technology and best in class customer service.</p>
                    <div className="links">
                        <div className="item">
                            <FiMail />
                            <span>travelsite@example.com</span>
                        </div>
                        <div className="item">
                            <AiOutlineMobile />
                            <span>1 562 867 5309 </span>
                        </div>
                        <div className="item">
                            <HiOutlineLocationMarker />
                            <span>Broadway & Morris St, New York</span>
                        </div>
                    </div>
                </div>
                <div className="center">
                    <div className="list">
                        <ul>
                            <li className='title'>Our Service</li>
                            <li>Dubai Tours</li>
                            <li>Singapore Tours</li>
                            <li>Dubai Visa</li>
                            <li>Dubai Visa Extension</li>
                            <li>Kuala Lumpur Tours</li>
                            <li>Dubai Packages</li>
                            <li>Canada Visa</li>
                            <li>Upcoming Tours</li>

                        </ul>
                    </div>
                    <div className="list">
                        <ul>
                            <li className='title'>Best Selling Tours</li>
                            <li>Evening Desert Safari</li>
                            <li>Abu Dhabi City Tour</li>
                            <li>Dubai Burj Khalifa</li>
                            <li>Global Village Dubai</li>
                            <li>Atlantis Aquaventure</li>
                            <li>Dubai Desert Safari with Dune Bashing</li>
                            <li>The Green Planet Dubai</li>
                            <li>Dhow Cruise Dinner Marina</li>

                        </ul>
                    </div>
                </div>
                <div className="right">
                    <div>
                        <h4>Subscribe to our Newsletter</h4>
                        <p>Do you want to receive our latest news and promotions? </p>
                        <form action="">
                            <input type="text" placeholder='Name' />
                            <input type="text" placeholder='Email' />
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="left">
                    <p>© 2022 Travelsite All rights reserved.</p>
                    <p>Home | My Bookings | About Us | Booking Support | Agent Login</p>
                </div>
                <div className="right">
                    <div className="one">
                        <FaGlobe />
                        <p>English(US) $ USD</p>
                    </div>
                    <div className="two">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaInstagram />
                        <FaLinkedinIn />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer