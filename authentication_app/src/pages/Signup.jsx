import React, { useState } from 'react'

function Signup() {
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
  
  
  const handleSignup= (e)=>{
    e.preventDefault();

    

    setUserData({
      name:"",
      email:"",
      password:""
    })
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
    </div>
  )
}

export default Signup