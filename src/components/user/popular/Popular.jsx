import React, { useState, useEffect } from 'react'
import './popular.scss'
import Card from '../card/Card'
import image1 from '../../../assets/images/a1.png'
import image2 from '../../../assets/images/a2.png'
import image3 from '../../../assets/images/a3.png'
import image4 from '../../../assets/images/a4.png'
import image5 from '../../../assets/images/a5.png'
import image6 from '../../../assets/images/a6.png'
import axios from '../../../config/axios'

function Popular() {
    const [images] = useState([image1, image2, image3, image4, image5, image6])
    const [card, setCard] = useState([])

    useEffect(() => {
        axios.get('/popular-flight').then((response) => {
            console.log(response);
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
                    return <Card key={value.Id} title={value.title} price={value.price} image={images[index + 1]} />

                })}
            </div>
        </div>
    )
}

export default Popular