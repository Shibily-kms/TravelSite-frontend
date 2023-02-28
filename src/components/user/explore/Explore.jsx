import React from 'react'
import './explore.scss'
import image from '../../../assets/images/01.png'
import Search from '../search/Search'

function Explore() {
    return (
        <div className='explore'>
            <div className="boader" style={{ backgroundImage: `url(${image})` }}>
                <div>
                    <h2>Let's go new</h2>
                    <h1>Explore and travel</h1>
                </div>
            </div>
            <div className="search-div">
                <Search />
            </div>
        </div>
    )
}

export default Explore