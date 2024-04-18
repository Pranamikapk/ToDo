import React, { useState } from 'react';
import './App.css';

function App() {
    const[toDos,setTodos] = useState([])
    const [toDo,setTodo] = useState('')
    const maxTask = 5
    const tasksDone = toDos.filter(todo=>todo.status)
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>{setTodo(e.target.value)}} type="text" placeholder=" +  Add item..." />
        <i onClick={()=>{if(toDo.trim() !== '' && toDos.length < maxTask){
          setTodos([...toDos,{id:Date.now(),text:toDo,status:false}]) 
                          setTodo('')}}} className="fas fa-plus"></i>
      </div>
      <div className="todos">
    {
      toDos.map((value)=>{
          return(
          <div className="todo">
              <div className="left">
              <input onChange={(e)=>{
                  console.log(e.target.checked);
                  console.log(value)
                  setTodos(toDos.filter(obj=>{
                      if(obj.id===value.id){
                          obj.status=e.target.checked
                      }
                      return obj
                  }))
              }} value={value.status} type="checkbox" name="" id="" />
              <p className={value.status ? 'strikethrough':''}>{value.text}</p>
              </div>
              <div className="right">
              <i onClick={()=>{
                if(window.confirm('Are you sure you want to delete the task?'))
                  setTodos(toDos.filter(toDo => toDo.id !== value.id))
                  }
              } className="fas fa-times"></i>
              </div>
          </div>
          )
      })
    }
    <ul>
    <div>
    <h1>Tasks Done</h1>
          {tasksDone.map((task)=>(
          <li key={task.id}>{task.text}</li>
          ))}
    </div>
    </ul>
      </div>
    </div>
  );
}


export default App;