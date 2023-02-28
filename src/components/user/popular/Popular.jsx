import React, { useState } from 'react'
import './popular.scss'
import Card from '../card/Card'
import image1 from '../../../assets/images/a1.png'
import image2 from '../../../assets/images/a2.png'
import image3 from '../../../assets/images/a3.png'
import image4 from '../../../assets/images/a4.png'
import image5 from '../../../assets/images/a5.png'
import image6 from '../../../assets/images/a6.png'
function Popular() {
    const [card, setCard] = useState([
        {
            Id: 1,
            image: image1,
        },
        {
            Id: 2,
            image: image2,
        },
        {
            Id: 3,
            image: image3,
        },
        {
            Id: 4,
            image: image4,
        },
        {
            Id: 5,
            image: image5,
        },
        {
            Id: 6,
            image: image6,
        },
        {
            Id: 7,
            image: image1,
        },
    ])
    return (
        <div className='popular'>
            <div className="title">
                <h3>Choose Your</h3>
                <h2>Popular Flight Near You</h2>
                <p>Find deals on domestic and international flights</p>
            </div>
            <div className="buttons">
                <button className='fill'>International</button>
                <button className='normal'>Domestic</button>
            </div>
            <div className="slide">
                {card.map((value)=>{
                   return <Card image={value.image} key={value.Id}/>

                })}
            </div>
        </div>
    )
}

export default Popular