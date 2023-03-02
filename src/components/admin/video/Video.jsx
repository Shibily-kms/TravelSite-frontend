import React, { useState } from 'react'
import './video.scss'
import { toast } from 'react-toastify'
import axios from '../../../config/axios'

function Video() {

    const [form, setForm] = useState('')

    const handleChange = (e) => {
        setForm(e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (form !== '') {
            const data = new FormData();
            const filename = Date.now() + form.name;
            data.append("name", filename);
            data.append("video", form);
            axios.post('/video', data).then((response)=>{

            })
        } else {
            toast.error('Choose a video')
        }
    }

    return (
        <div className='video-comp'>
            <div className="top">
                <h4>Perfect Holiday</h4>
            </div>

            <div className="input-div" >
                <form action="" style={{ display: 'flex', gap: '10px' }} onSubmit={handleSubmit}>
                    <input type="file" name='video' onChange={handleChange} />
                    <button>Submit</button>
                </form>
            </div>

            <div className="video-show">
                <video src=""></video>
            </div>
        </div>
    )
}

export default Video