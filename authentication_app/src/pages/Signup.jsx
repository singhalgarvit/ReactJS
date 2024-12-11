import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useContext } from 'react';
import { MyContext } from '../Mycontext';

function Signup() {
  const navigate=useNavigate();
  const {username,setUsername,jwtToken,setJwtToken}=useContext(MyContext);
  const [showPassword,setShowPassword] = useState(false);
  const [userData,setUserData] = useState({
    name:"",
    email:"",
    password:""
  })


  const handleInputChange = (e) => {
    const { name, value } = e.target; 
    setUserData((prevData) => ({
      ...prevData, 
      [name]: value 
    }));
  };
  
  
  const handleSignup=async (e)=>{
    e.preventDefault();
    const url=`${process.env.REACT_APP_BACKEND_URL}/auth/user/signup`;
    try{
      const token = await fetch(url,{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData)
      })
      
      if(!token.ok){
        const errMsg=await token.json();
        throw new Error(errMsg);
      }
  
      const data= await token.json();
      localStorage.setItem("token",data.token);
      localStorage.setItem("name",data.name);
      setUsername(data.name);
      setJwtToken(data.token);
      navigate("/");
      setUserData({
        name:"",
        email:"",
        password:""
      })
    }catch(err){
      alert(err);
    }
  }

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <div className='inputField'>
            <label htmlFor="name">Name:</label>
            <input 
            type="text"
            name='name'
            placeholder='John Doe'
            value={userData.name}
            onInput={handleInputChange}
            required />
        </div>

        <div className='inputField'>
            <label htmlFor="email">Email:</label>
            <input 
            type="email"
            name='email' 
            placeholder='john@example.com'
            value={userData.email}
            onInput={handleInputChange}
            required/>
        </div>

        <div className='inputField'>
            <label htmlFor="password">Password:</label>
            <input 
            type={showPassword?"text":"password"}
            name='password' 
            placeholder={showPassword?"John@123":"********"}
            value={userData.password}
            onInput={handleInputChange}
            required/>
        </div>

        <div className='showPassword'>
          <input 
          type="checkbox" 
          name='toggle'
           id='toggle'
           checked={showPassword}
           onChange={(e) => setShowPassword(!showPassword)}/>
          <label htmlFor="toggle">Show Password</label>
        </div>

        <button type='submit'>Signup</button>
      </form>
      <p>Already Have an Account <Link to="/login">Login Here</Link></p>
    </div>
  )
}

export default Signup