import React,{useState,useEffect} from "react";

function Timer(){
  const [ count, setCount]= React.useState(0);

  useEffect(()=>{
    const time= setInterval(()=>{
      console.log("time is clicking")
      setCount(count+1)
    },1000);

    return()=>{
      clearInterval(time)
    }
  },[count])

return(
  <div>
    <p>Timer Counr {count}</p>
  </div>
)
}

export default Timer;