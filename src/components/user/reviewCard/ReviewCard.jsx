import React from 'react'
import { BsFillStarFill } from 'react-icons/bs';

import './reviewCard.scss'

function ReviewCard({ image, name, review, place }) {
    return (
        <div className='reviewCard'>
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="data">
                <h2>{place}</h2>
                <div className="star">
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                </div>
                <p>{review}</p>
                <h4>{name}</h4>
            </div>
        </div>
    )
}

export default ReviewCard