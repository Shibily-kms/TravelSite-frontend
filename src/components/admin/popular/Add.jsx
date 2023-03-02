import React, { useState } from 'react'
import { toast } from 'react-toastify'
import axios from '../../../config/axios'

function Add({ setShow, setData }) {
    const [form, setForm] = useState({ title: '', price: '', image: '' })
    const handleChange = (e) => {
        if (e.target.name === 'image') {
            setForm({
                ...form,
                [e.target.name]: e.target.files[0]
            })
        } else {
            setForm({
                ...form,
                [e.target.name]: e.target.value
            })
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.title === '' || form.price === '' || form.image === '') {
            toast.error('Fill all inputs')
        } else {
            const data = new FormData();
            const filename = Date.now() + form.image.name;
            data.append("name", filename);
            data.append("file", form.image);
            form.image = filename
            axios.post('/admin/popular-flight/image', data).then((response) => {
                axios.post('/admin/popular-flight', form).then((result) => {
                    setData((state) => [result.data.data, ...state])
                    setShow(false)
                }).catch((error) => {
                    toast.error('Not added')
                })
            }).catch((error) => {
                toast.error('Image uploading failed')
            })
        }

    }
    return (
        <div className='holiday-add'>
            <div className="boader">
                <h4>Add Item</h4>
                <div className="form">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="input-div">
                            <label htmlFor="Title">Title</label>
                            <input type="text" onChange={handleChange} name='title' />
                        </div>
                        <div className="input-div">
                            <label htmlFor="Price">Price</label>
                            <input type="number" onChange={handleChange} name='price' />
                        </div>
                        <div className="input-div">
                            <label htmlFor="Title">Image</label>
                            <input type="file" onChange={handleChange} name='image' />
                        </div>
                        <div className="">
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="shadow" onClick={() => setShow(false)}></div>
        </div>
    )
}

export default Add