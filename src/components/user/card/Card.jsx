import React from 'react'
import './card.scss'

function Card({image,title,price}) {
    return (
        <div className='card'>
            <div className="boader" >
                <img src={image} alt="" />
                <div className="box">
                    <div className="left">
                        <p>{title}</p>
                    </div>
                    <div className="right">
                        <p>From</p>
                        <h4>₹ {price}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card