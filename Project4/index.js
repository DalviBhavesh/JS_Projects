
let randomVal = Math.floor((Math.random()*100)+1);
console.log(`ANS = ${randomVal}`);

let blurAns = document.querySelector("#ans"); 
const input = document.querySelector("#input");
let submit = document.querySelector("#submit");
let attemptsLeft = document.querySelector("#remainingAttempts");

let g1 = document.querySelector("#g1");
let g2 = document.querySelector("#g2");
let g3 = document.querySelector("#g3");
let g4 = document.querySelector("#g4");
let g5 = document.querySelector("#g5");
let g6 = document.querySelector("#g6");
let g7 = document.querySelector("#g7");
let g8 = document.querySelector("#g8");
let g9 = document.querySelector("#g9");
let g10 = document.querySelector("#g10");

let f1 = document.querySelector("#f1");
let f2 = document.querySelector("#f2");
let f3 = document.querySelector("#f3");
let f4 = document.querySelector("#f4");
let f5 = document.querySelector("#f5");
let f6 = document.querySelector("#f6");
let f7 = document.querySelector("#f7");
let f8 = document.querySelector("#f8");
let f9 = document.querySelector("#f9");
let f10 = document.querySelector("#f10");


let guesses = ["----------","----------","----------","----------","----------","----------","----------","----------","----------","----------"];
let feedback = ["----------","----------","----------","----------","----------","----------","----------","----------","----------","----------"];
let arrIndex = 0;
let remainingAttempts = 10;

let playGame = true;

blurAns.querySelector(".display-1").innerHTML = randomVal;

if(playGame){
    submit.addEventListener("click",(e)=>{
    
        e.preventDefault();
        let InVal = input.value;
        input.value = null;

        if(validateInput(InVal)){
            if(checkNumber(InVal)){
                if(remainingAttempts > 1){
                    guesses[arrIndex] = parseInt(InVal);
                }else{
                    playGame = false;
                    alert(`Game Over ! \nThe number was ${randomVal}`);
                    location.reload();
                }
            };
            
            
            
            console.log(`Guessed number = ${InVal}`);
            console.log(guesses);
            console.log(feedback);
            arrIndex++;
            attemptsLeft.innerHTML = --remainingAttempts;
        }else{
            alert("Enter a valid number from 1 to 100")
        }

        

        g1.innerHTML = guesses[0]; 
        g2.innerHTML = guesses[1];
        g3.innerHTML = guesses[2];
        g4.innerHTML = guesses[3];
        g5.innerHTML = guesses[4];
        g6.innerHTML = guesses[5];
        g7.innerHTML = guesses[6];
        g8.innerHTML = guesses[7];
        g9.innerHTML = guesses[8];
        g10.innerHTML =guesses[9];

        f1.innerHTML = feedback[0]; 
        f2.innerHTML = feedback[1]; 
        f3.innerHTML = feedback[2]; 
        f4.innerHTML = feedback[3]; 
        f5.innerHTML = feedback[4]; 
        f6.innerHTML = feedback[5]; 
        f7.innerHTML = feedback[6]; 
        f8.innerHTML = feedback[7]; 
        f9.innerHTML = feedback[8]; 
       f10.innerHTML = feedback[9];




    
    })

}



function validateInput(input) {
    if(isNaN(input)||input === "" || input <= 0 || input > 100){
        return false;
    }
    return true;
}



function checkNumber(num){
    
    if(num == randomVal){
        console.log("correct");
        alert(`Congratulations!!!! \n${num} is the Right answer.....\nWell Played`);
        location.reload();
        return false;
    }
    else if(num > randomVal){
        feedback[arrIndex] = "Guess Low" ;
        console.log("Low");
        return true;
    }
    else if(num < randomVal){
        feedback[arrIndex] = "Guess High"
        console.log("High");
        return true;
    }
}



let giveUp = document.querySelector("#giveUp");
let restart = document.querySelector("#restart");


giveUp.addEventListener("click",(e)=>{
    e.preventDefault();
    
    blurAns.style = (blurAns.style.filter === "blur(0px)")?("filter:blur(14px)"):("filter:blur(0px)");
    console.log(blurAns.style.filter);
})

restart.addEventListener("click",(e)=>{
    e.preventDefault();
    location.reload();
})
