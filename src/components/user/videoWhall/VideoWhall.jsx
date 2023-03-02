import React from 'react'
import image from '../../../assets/images/v1.png'
import './videoWhall.scss'


function VideoWhall() {
    return (
        <div className='video-whall' style={{ backgroundImage: `url(${image})` }}>
            <div className="title">
                <h3>Go & Discover  </h3>
                <h2 style={{ color: 'white' }}>Breathtaking Cities </h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor. Aenean massa. Cum sociis the</p>
            </div>
            <div className="video" >
                <video controls loop muted src="http://localhost:8000/Video/WhallVideo.mp4"></video>
            </div>

        </div>
    )
}

export default VideoWhall