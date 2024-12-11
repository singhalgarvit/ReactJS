import React, { useState } from 'react'
import {useNavigate , Link} from 'react-router-dom'
import { useContext } from 'react';
import { MyContext } from '../Mycontext';

function Login() {
  const navigate=useNavigate();
  const {username,setUsername,jwtToken,setJwtToken}=useContext(MyContext);
  const [showPassword,setShowPassword] = useState(false);
  const [userData,setUserData] = useState({
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
  
  
  const handleLogin=async (e)=>{
    e.preventDefault();
    const url=`${process.env.REACT_APP_BACKEND_URL}/auth/user/login`;
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
        email:"",
        password:""
      })
    }catch(err){
      alert(err);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>

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

        <button type='submit'>Login</button>
      </form>
      <p>Don't Have an Account <Link to="/signup">Signup Here</Link></p>
    </div>
  )
}

export default Login