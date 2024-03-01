import React, { useState } from 'react'
import './Login.css'
import {  useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {


    var [inputs,setInputs]=useState({"Name":'',"Password":''}) 
 
    const inputHandler = (event)=>{ 
    const {name,value}=event.target 
    setInputs((inputs)=>({...inputs,[name]:value})) 
    console.log(inputs) 
         } 
         const navigate=useNavigate() 
 
         const checkData = async (event) => { 
             event.preventDefault(); 
          
             try { 
              const response = await 
              axios.post("http://localhost:3005/Login",
              { 
               Name:inputs.Name, 
               Password:inputs.Password, 
             }) 
             if (response.data.success) { 
                 alert('Login successful'); 
                 navigate('/s'); 
               }  
               else { 
                 alert('Invalid username and Password. Please try again.'); 
                 console.log(response.data); 
          
               } 
             } catch (err) { 
               alert('Error occurred during login. Please try again.'); 
             } 
           }; 
              
            


  return (
    <div className='login'> 
       <div className="login-container">
        <h1>Login </h1>
        <div className="login-fields">
          <input type="text" placeholder='Your Name' name='Name' value={inputs.Name} onChange={inputHandler}/>
          
          <input type="password" placeholder='Password'name='Password' value={inputs.Password} onChange={inputHandler} />
          
        </div>
        <button onClick={checkData}>Login</button>
        </div>
    </div>
  )
}

export default Login
