import React from 'react'
import './home.scss'
import Header from '../../../components/user/header/Header'
import Explore from '../../../components/user/explore/Explore'
import Holiday from '../../../components/user/holiday/Holiday'
import VideoWhall from '../../../components/user/videoWhall/VideoWhall'
import Popular from '../../../components/user/popular/Popular'
import Booking from '../../../components/user/booking/Booking'
import Review from '../../../components/user/review/Review'
import Footer from '../../../components/user/footer/Footer'

function Home() {
    return (
        <>

            <div>
                <div className='header'>
                    <Header />
                </div>
                <div className='explore-div'>
                    <Explore />
                </div>
                <div className="holiday-div">
                    <Holiday />
                </div>
                <div className="video-div">
                    <VideoWhall />
                </div>
                <div className="popular-div">
                    <Popular />
                </div>
                <div className="booking-div">
                    <Booking />
                </div>
                <div className="review-div">
                    <Review />
                </div>
                <div className="footer-div">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Home