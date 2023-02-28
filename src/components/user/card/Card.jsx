import React from 'react'
import './card.scss'

function Card({image}) {
    return (
        <div className='card'>
            <div className="boader" >
                <img src={image} alt="" />
                <div className="box">
                    <div className="left">
                        <p>Museum of the Future</p>
                    </div>
                    <div className="right">
                        <p>From</p>
                        <h4>₹ 3222.22</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card