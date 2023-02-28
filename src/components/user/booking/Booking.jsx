import React from 'react'
import image1 from '../../../assets/images/cashback.png'
import image2 from '../../../assets/images/discount.png'
import image3 from '../../../assets/images/travel.png'
import image4 from '../../../assets/images/voucher.png'
import './booking.scss'

function Booking() {
    return (
        <div className='booking'>
            <div className="title">
                <h3>Choose Your</h3>
                <h2>Best Flight Booking Offers</h2>
                <p>When you book with us, you know you're booking with the best in the business.</p>
            </div>
            <div className="boader">
                <div className="list">
                    <div className="image">
                        <img src={image1} alt="" />
                    </div>
                    <div className="text">
                        <p className="head">Get 8% Cashback</p>
                        <p>on Flights with Travelsite</p>
                    </div>
                </div>
                <div className="list">
                    <div className="image">
                        <img src={image2} alt="" />
                    </div>
                    <div className="text">
                        <p className="head">Flat 12% Off</p>
                        <p>on Flights via Mobiwik</p>
                    </div>
                </div>
                <div className="list">
                    <div className="image">
                        <img src={image3} alt="" />
                    </div>
                    <div className="text">
                        <p className="head">International</p>
                        <p>Travel Guidlines</p>
                    </div>
                </div>
                <div className="list">
                    <div className="image">
                        <img src={image4} alt="" />
                    </div>
                    <div className="text">
                        <p className="head">Book a flight</p>
                        <p>Get valuable vouchers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking