import React,{useRef} from "react";

const Focus =()=>{
    const inputRef = useRef(null);

    React.useEffect(()=>{
        inputRef.current.focus();
    }, []);

return(
    <>
    <h3>Focus Input</h3>
    <input type="text"  ref={inputRef}/>
    </>
)

}

export default Focus;