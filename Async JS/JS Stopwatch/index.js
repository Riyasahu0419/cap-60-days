let Display = document.getElementById("display")

let milisec=0;
let sec = 0;
let minute = 0;
let hour = 0;
let time;

function start(){
   function time1(){

       milisec+=100;
       if(milisec==1000){
           milisec=0
           sec+=1
        }
        if(sec==60){
            sec=0
            minute+=1;
        }
        
        if(minute==60){
            minute=0
            hour+=1
        }
        Display.innerText= formatTime(hour)+":" + formatTime(minute)+":"+ formatTime(sec)+":"+ formatTime(milisec);
    }
   time= setInterval(time1,100)
 }


function pause(){
        clearInterval(time)
}

function reset(){
    sec=0
    minute=0
    milisec=0
    hour=0
    Display.innerText= "00hr : 00min : 00sec : 00ms "
}

function formatTime(time){
    return(time<10 ? "0" + time : time);
}