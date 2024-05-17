import React,{useRef} from "react";

const Intract=()=>{
    const eleRef = useRef(null);

    function handleClick(){
        eleRef.current.style.backgroundColor = 'lightgreen'
    }

    return(
        <div ref={eleRef} onClick={handleClick}>
          click here for changing the background color
        </div>
    );
};

export default Intract;
