const color = document.querySelectorAll(".color");
const body = document.querySelector("body");


color.forEach((e)=>{
    e.addEventListener("click",()=>{
        console.log(e.id);
        switch (e.id) {
            case "secondary":
                body.className = "bg-"+e.id;
                break;

            case "danger":
                 body.className = "bg-"+e.id;
                break;

            case "success":
                body.className = "bg-"+e.id;
                break;

            case "warning":
                body.className = "bg-"+e.id;
                break;
        
            default:
                body.className = "";
                break;
        }
    })
});