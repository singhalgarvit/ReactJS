import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to='/login'  className='buttons'>Login</Link>
      <Link to='/signup' className='buttons'>Signup</Link>
    </div>
  )
}

export default Home