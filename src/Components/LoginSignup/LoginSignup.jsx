import React, { useState } from 'react'
import './LoginSignup.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
const LoginSignup = () => {


  var [inputs, setInputs] = useState({
    "Name": '',
    "Email": '',
    "Password": ''
   
  })




  const inputHandler = (event) => {
    const { name, value } = event.target
    setInputs((inputs) => ({ ...inputs, [name]: value }))
    console.log(inputs)
  }

  const addHandler = (event) => {

   console.log("Clicked")
   console.log(inputs)
   
      axios.post("http://localhost:3005/lnew", inputs)
        .then((response) => {
          alert("Signup Successfully")
        })
        .catch(err => console.log(err))
  
    


  }



  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name'  name='Name' value={inputs.Name} onChange={inputHandler} />
          <input type="email" placeholder='Email Address' name='Email' value={inputs.Email} onChange={inputHandler} />
          <input type="password" placeholder='Password'  name='Password' value={inputs.Password} onChange={inputHandler} />
         

        </div>
       
        <button onClick={addHandler}><Link to='/s'>Continue</Link></button>
        <p className="loginsignup-login">Already  have an account? <span><Link to='/l'>Login Here</Link></span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
