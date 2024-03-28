let hrs = document.querySelector("#hrs");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let ampm = document.querySelector("#ampm");
let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let weekday = document.querySelector("#week");
const Days = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
const mnth = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
setInterval(()=>{
    let date = new Date();
    
     if( date.getHours()%12 == 0 ){
        hrs.innerHTML = 12;
     }else{
        hrs.innerHTML = date.getHours()%12;
     }
    
    min.innerHTML = date.getMinutes();
    sec.innerHTML = date.getSeconds();
    ampm.innerHTML = (date.getHours()/12 > 0)? "PM" : "AM" ;
    day.innerHTML = date.getDate();

    month.innerHTML = mnth[date.getMonth()];
    year.innerHTML = date.getFullYear();

    weekday.innerHTML = Days[date.getDay()]

}, 1000);


