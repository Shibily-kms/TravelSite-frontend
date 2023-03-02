import React, { useEffect, useState } from 'react'
import './holiday.scss'
import Add from './Add'
import axios from '../../../config/axios'
import { toast } from 'react-toastify'


function Holiday() {
    const [show, setShow] = useState(false)
    const [data, setData] = useState([])

    const handleDelete = (id) => {
        axios.delete('/admin/perfect-holiday/' + id,).then((result) => {
            if (result) {
                setData((state) => {
                    return state.filter((value) => value._id !== id)
                })
                toast.success('Item deleted')
            }
        })
    }
    useEffect(() => {
        axios.get('/admin/perfect-holiday').then((response) => {
            setData(response.data.data)
        })
    }, [])
    return (
        <div>
            <div className="admin-holiday">
                <div className="top">
                    <h4>Perfect Holiday</h4>
                    <button onClick={() => setShow(true)}>Add New</button>
                </div>
                <div className="content">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Sl No</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((value, index) => {
                                return <tr>
                                    <td>{index + 1}</td>
                                    <td> <img src={value?.image ? 'http://localhost:8000/images/' + value.image : 'null'} /> </td>
                                    <td>{value.title}</td>
                                    <td>{value.price}</td>
                                    <td><button onClick={() => handleDelete(value._id)}>Delete</button></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
                {show ? <Add setShow={setShow} setData={setData} /> : ''}
            </div>
        </div>
    )
}

export default Holiday