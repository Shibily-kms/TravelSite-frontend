import React from 'react'

import './roundCard.scss'
function RoundCard({text,image}) {
    return (
        <div className='roundCard'>
            <div className="round" >
                <img src={image} alt="" />
                <h2>{text}</h2>
            </div>
        </div>
    )
}

export default RoundCard