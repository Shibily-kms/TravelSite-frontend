import React from 'react'
import { IoAirplaneOutline } from "@react-icons/all-files/io5/IoAirplaneOutline";
import { BsCalendar3 } from "react-icons/bs";
import './search.scss'

function Search() {
    return (
        <div className='search'>
            <div className="box">
                <div className="top">
                    <div className="title">
                        <div>
                            <IoAirplaneOutline />
                        </div>
                        <p>FLIGHTS</p>
                    </div>
                    <div className="input-radio">
                        <input type="radio" name='type' />
                        <label htmlFor="" >Round-trip</label>
                    </div>
                    <div className="input-radio">
                        <input type="radio" name='type' />
                        <label htmlFor="">One-way</label>
                    </div>
                    <div className="input-radio">
                        <input type="radio" name='type' />
                        <label htmlFor="">Multi-city</label>
                    </div>
                    <div className="input-select">
                        <select name="economy" id="econemy">
                            <option value="Economy">Economy</option>
                        </select>
                    </div>
                    <div className="input-select">
                        <select name="adult" id="adult">
                            <option value="1">1 Adult</option>
                        </select>
                    </div>
                </div>
                <div className="search-section">
                    <div className="one">


                        <div className="input-text">
                            <p>COK</p>
                            <input type="text" placeholder='Cochin International Airport' />
                        </div>
                        <div className="input-text">
                            <p>COK</p>
                            <input type="text" placeholder='Cochin International Airport' />
                        </div>
                    </div>
                    <div className="two">


                        <div className="input-text">
                            <div>
                                <BsCalendar3 />
                            </div>
                            <input type="text" placeholder='Sat, Nov 12' />
                        </div>
                        <div className="input-text">
                            <div>
                                <BsCalendar3 />
                            </div>
                            <input type="text" placeholder='Sat, Nov 12' />
                        </div>

                        <button>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search