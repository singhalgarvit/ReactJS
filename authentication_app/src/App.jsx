import './App.css';
import {Routes, Route, Navigate } from 'react-router-dom';
import {Home, Login, Signup} from './pages/';
import { MyContext } from "./Mycontext";
import { useState } from 'react';

function App() {
  // const initName=localStorage.getItem("name");
  // const initToken=localStorage.getItem("token");
  const [username,setUsername] = useState(localStorage.getItem("name"));
  const [jwtToken,setJwtToken] = useState(localStorage.getItem("token"));
  return (
    <div className="App">
      <MyContext.Provider value={{ username,setUsername,jwtToken,setJwtToken }}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/*' element={<Navigate to='/'/>}/>
        </Routes>
      </MyContext.Provider>
    </div>
  );
}

export default App;
