import React from 'react'
import image from '../../../assets/images/v1.png'
import video from '../../../assets/images/v2.png'
import './videoWhall.scss'
import { BsFillPlayFill } from "react-icons/bs";


function VideoWhall() {
    return (
        <div className='video-whall' style={{ backgroundImage: `url(${image})` }}>
            <div className="title">
                <h3>Go & Discover  </h3>
                <h2 style={{ color: 'white' }}>Breathtaking Cities </h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor. Aenean massa. Cum sociis the</p>
            </div>
            <div className="video" style={{ backgroundImage: `url(${video})` }}>
                <div className="play">
                    <BsFillPlayFill/>
                </div>
            </div>

        </div>
    )
}

export default VideoWhall