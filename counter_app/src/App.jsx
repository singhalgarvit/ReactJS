import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [value,setValue]=useState(0);
  const add = () =>{
    value++;
    setValue(value);
  }
  const subtract = () =>{
    value = (value>0)?value-1:value;
    setValue(value);
  }
  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>{value}</p>
      <br />
      <button onClick={subtract}>-</button>
      <button onClick={add}>+</button>
    </div>
  );
}

export default App;
