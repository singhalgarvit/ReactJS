import './App.css';
import {Routes, Route, Navigate } from 'react-router-dom';
import {Home, Login, Signup} from './pages/';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/*' element={<Navigate to='/'/>}/>
      </Routes>
    </div>
  );
}

export default App;
