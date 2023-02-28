import React, { useState } from 'react'
import './holiday.scss'
import RoundCard from '../round-card/RoundCard'
import Card from '../card/Card'
import roundOne from '../../../assets/images/r1.png'
import roundTwo from '../../../assets/images/r2.png'
import image1 from '../../../assets/images/a1.png'
import image2 from '../../../assets/images/a2.png'
import image3 from '../../../assets/images/a3.png'
import image4 from '../../../assets/images/a4.png'
import image5 from '../../../assets/images/a5.png'
import image6 from '../../../assets/images/a6.png'

function Holiday() {
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
        }
    ])
    return (
        <div className='holiday'>
            <div className="title">
                <h3>Choose Your</h3>
                <h2>Perfect Holiday</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nesciunt rerum pariatur
                    eveniet similique vero tempore ut aspernatur excepturi.</p>
            </div>
            <div className="card-div">
                <RoundCard text="Dubai" image={roundOne} />
                {card.map((value) => {
                    return <Card key={value.Id} image={value.image}/>
                })}
                <RoundCard text="Thailand" image={roundTwo} />
            </div>
        </div>
    )
}

export default Holiday