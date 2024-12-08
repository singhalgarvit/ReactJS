import { useState } from 'react';
import './App.css';

  function App() {
    const [todos,setTodos]=useState(["Go to Gym","Take Bath","Study"]);
    const [val,setVal]=useState("");

    const addTodo = () =>{
      if(val == "" || val == 0){
      }
      else{
        setTodos([...todos,val]);
        setVal("");
      }
    }

    const delTodo = (index) =>{
      if(index>-1){
        const arr=todos;
        arr.splice(index,1);
        setTodos([...arr]);
      }
    }

    const editTodo = (index) =>{
      const newTodo=prompt("");
      if(newTodo === null || newTodo === 0){
      }
      else{
        const arr = todos;
        arr[index]=newTodo;
        setTodos([...arr]);  
      }
    }
    return (
      <div className="App"> 
        <h1>ToDo App</h1>
        <div className='section01'>
        <input autoFocus type="text" value={val} onInput={(e)=>setVal(e.target.value)}/>
        <button className='add' onClick={addTodo}>Add</button>
        </div>
        <ul>
        {todos.map((e,index)=>(
          <li key={index}>
          <span>{e}</span>
          <div className='buttons'>
          <button className='edit' onClick={()=>editTodo(index)} >Edit</button>
          <button className='delete' onClick={()=>delTodo(index)} >Delete</button>
          </div>
          </li>
        ))}
        </ul>
      </div>
    );
  }

export default App;
