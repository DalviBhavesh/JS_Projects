const display = document.querySelector(".displayKey");

window.addEventListener("keypress",(e)=>{
    display.innerHTML = (e.key === " ") ? "Space" : e.key;
});
