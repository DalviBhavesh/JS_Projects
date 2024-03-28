
const form = document.querySelector("form");
let BMI = 0;

form.addEventListener("submit", (e)=>{
    
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector(".BMI").querySelector(".text");
    const warn = document.querySelector("#warn");
    
    


    if(isNaN(height) || height <= 0 || isNaN(weight)|| height <= 0){
        warn.style = "display: block";
        
    }else{
        
        BMI = (weight / ((height**2)/10000)).toFixed(2); 
        result.innerHTML = BMI; 
        warn.style = "display: none"    
    }

    
    

})



