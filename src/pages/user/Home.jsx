import React from 'react'
import './home.scss'
import Header from '../../components/user/header/Header'
import Explore from '../../components/user/explore/Explore'
import Holiday from '../../components/user/holiday/Holiday'

function Home() {
    return (
        <div>
            <div className='header'>
                <Header />
            </div>
            <div className='explore-div'>
                <Explore />
            </div>
            <div className="holiday">
                <Holiday />
            </div>

        </div>
    )
}

export default Home