import React,{useRef} from "react";

const Uncont=()=>{
    const inputRef = useRef(null);
    

    return(
        <>
    <h3>Uncounted input</h3>
        <input type="text" ref={inputRef}  />
        <p>{inputRef.current?.value}</p>
        </>
    )
}

export default Uncont;