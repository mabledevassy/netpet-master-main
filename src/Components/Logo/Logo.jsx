import React from 'react'
import './Logo.css'
import logo from '../Assets/logo.png'

const Logo = () => {
  return (
   
      <div className='navbar'>
      
      <div className="nav-logo">
      <img src= {logo}alt="" />
        <p>PETNET</p>
      </div>
    </div>
  )
}

export default Logo
