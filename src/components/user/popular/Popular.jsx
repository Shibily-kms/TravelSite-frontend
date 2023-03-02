import React, { useState, useEffect } from 'react'
import './popular.scss'
import Card from '../card/Card'
import axios from '../../../config/axios'

function Popular() {
    const [card, setCard] = useState([])

    useEffect(() => {
        axios.get('/popular-flight').then((response) => {
            setCard(response.data.data)
        })
    }, [])

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
                {card.map((value,index) => {
                    return <Card key={value.Id} title={value.title} price={value.price} image={value.image} />

                })}
            </div>
        </div>
    )
}

export default Popular