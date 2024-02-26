
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './View.css'
import { Buffer } from "buffer";
import { Button } from '@mui/material';

const View = () => {
    const [viewData, setViewData] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3005/view1/${id}`).then(({ data }) => {
            setViewData(data)
            console.log(data)
        })
    }, [])

    return (
        <div className='i'>
           
           
           <img src={viewData.image1}alt='Err'
                                  />
         
           <div className='p'>
           <h3>{viewData.Subcategory}</h3> 
           <p className='t'>{viewData.Category}</p>
           <p className='r'>{viewData.Description}</p>
           <div className='u'>&#8377;{viewData.Price}</div>
           <Button variant='contained'>Buy Now</Button>
            </div>
            
          
        </div>
    )
}

export default View
