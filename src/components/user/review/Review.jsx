import React, { useState } from 'react'
import './review.scss'
import ReviewCard from '../reviewCard/ReviewCard'
import profile1 from '../../../assets/images/Ellipse14-1.png'
import profile2 from '../../../assets/images/Ellipse14.png'
import profile3 from '../../../assets/images/Ellipse14-2.png'

function Review() {
    const [card, setCard] = useState([
        {
            id: 1,
            name: 'Roger Brooks',
            review: 'Holland is famous for its canals. Admire the unique structure of Dutch cities. Go for a boat tour through the canals ....',
            place: 'Hollend Canals',
            image: profile1
        },
        {
            id: 2,
            name: 'Ema Cooper',
            review: 'Dubai, ‘the land of Gold’ is one of the most cosmopolitan cities in the world.',
            place: 'Dubai',
            image: profile2
        },
        {
            id: 3,
            name: 'Roger Brooks',
            review: 'Taipei is the economic, political, educational and cultural center of Taiwan and one of the major hubs in East ',
            place: 'James Fisher',
            image: profile3
        },
    ])
    return (
        <div className='review'>
            <div className="title">
                <h3>Read The Top </h3>
                <h2 style={{ color: 'white' }}>Travel Reviews</h2>
                <p style={{ color: 'white' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor.
                    Aenean massa. Cum sociis the</p>
            </div>
            <div className="reviewCard-div">
                {card.map((value) => {
                    return <ReviewCard image={value.image} name={value.name} review={value.review} place={value.place} key={value.key} />
                })}

            </div>

        </div>
    )
}

export default Review