import React,{useState} from 'react';
import './App.css';

function App() {
const[count,setCount]=React.useState(0)

 function handleInc(){
  setCount(count+1)
 }

 function handleDec(){
  setCount(count-1)
 }

  return (


    <div className="App">
      <h2>Counter:{count}</h2>
      <button onClick={handleInc}>Inc</button>
      <button onClick={handleDec}>dec</button>
      
    </div>
  );
}

export default App;
