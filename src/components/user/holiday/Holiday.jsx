import React, { useEffect, useState } from 'react'
import './holiday.scss'
import RoundCard from '../round-card/RoundCard'
import Card from '../card/Card'
import roundOne from '../../../assets/images/r1.png'
import roundTwo from '../../../assets/images/r2.png'
import axios from '../../../config/axios'

function Holiday() {
    const [card, setCard] = useState([])
    useEffect(() => {
        axios.get('/perfect-holiday').then((response) => {
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
                    return <Card key={value.Id} title={value.title} price={value.price} image={value.image} />
                })}
                <RoundCard text="Thailand" image={roundTwo} />
            </div>
        </div>
    )
}

export default Holiday