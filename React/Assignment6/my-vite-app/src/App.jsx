import React, { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] =React.useState([])
  const [newTodo,setNewTodo] = React.useState("")


  function handleClick(){
    setTodo([...todo , newTodo ])
    setNewTodo("");
  }

  return (
    <>
      <div>
        <input type="text" value={newTodo} onChange={(ele)=>setNewTodo(ele.target.value)} />
        <button onClick={handleClick}>Add Todo</button>
      </div>

      <ul>
        {todo.map((e,i)=>(

          <li key={i}>
            {e}
           </li>
        ))}
      </ul>
    
    </>
  )
}

export default App
