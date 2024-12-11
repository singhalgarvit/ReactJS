import React from 'react'
import { Link,Navigate, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { MyContext } from '../Mycontext';

function Home() {
  const navigate=useNavigate()
  const {username,setUsername,jwtToken,setJwtToken}=useContext(MyContext);
  const logout=()=>{
    localStorage.clear();
    setUsername("");
    setJwtToken("");
  }
  return (
    <div>
      <h1>Home</h1>
      {!username && <div>
        <Link to='/login'  className='buttons'>Login</Link>
        <Link to='/signup' className='buttons'>Signup</Link>
      </div>
      }
      {username && <div>
        {username}
        <button onClick={logout}>Logout</button>
        </div>
      }
    </div>
  )
}

export default Home