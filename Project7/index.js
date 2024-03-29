const body = document.querySelector("body");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
let reference;

let repeter = ()=>{
    if(!reference){
        reference = setInterval(()=>{
            let randomNo1 = parseInt((Math.random()*1000)%255);
            let randomNo2 = parseInt((Math.random()*1000)%255);
            let randomNo3 = parseInt((Math.random()*1000)%255);
            
            
            console.log(body.style.backgroundImage = `linear-gradient(rgb(${225},${randomNo2},${randomNo3}), rgb(${randomNo3},${randomNo2},${randomNo1}) )`)
        },500);
    }
    



}

let stopper = ()=>{
    clearInterval(reference);
    reference = null;
    
}

start.addEventListener("click",repeter);
stop.addEventListener("click",stopper);





