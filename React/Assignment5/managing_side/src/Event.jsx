import React,{useEffect} from "react";

function Event(){
    const [scroll , setScroll]= React.useState(0)
    useEffect(()=>{
        const handleScroll=()=>{
            console.log("event is Scrolling")
            setScroll(window.scrolly);
        }

        document.addEventListener('s',handleScroll);

        return()=>{
            document.removeEventListener('s',handleScroll)
        }

    },[scroll])


    return(
        <div>
            <p>
                scroll position is :{scroll}
            </p>
        </div>

    ) 
};

export default Event;