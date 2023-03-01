import React, { useEffect, useState } from 'react'
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
import axios from '../../../config/axios'

function Holiday() {
    const [card, setCard] = useState([])
    const [images] = useState([image1, image2, image3, image4, image5, image6])
    useEffect(() => {
        axios.get('/perfect-holiday').then((response) => {
            console.log(response);
            setCard(response.data.data)
        })
    }, [])
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
                {card.map((value, index) => {
                    return <Card key={value.Id} title={value.title} price={value.price} image={images[index + 1]} />
                })}
                <RoundCard text="Thailand" image={roundTwo} />
            </div>
        </div>
    )
}

export default Holiday