const addBtn = document.querySelector(".add-btn");
const model = document.querySelector(".model_cont");
const priorityColors = document.querySelectorAll(".priority_color");


addBtn.addEventListener("click",()=>{
    model.style.display = "flex";
})




function removeActiveFromAll(){

 for(let i=0;i<priorityColors.length;i++){
     priorityColors[i].classList.remove("active");
 }
}


for(let i=0;i<priorityColors.length;i++){

    const priorityElement = priorityColors[i];

    priorityElement.addEventListener("click",(e)=>{

        //remove active from all
        removeActiveFromAll();


        e.target.classList.add("active");
    })

}



model.addEventListener("keypress",(e)=>{

    if(e.key!="Enter"){
        return;
    }

    console.log("Enter is pressed");

    const cColor = findActiveColor();

    console.log(cColor);


})

function findActiveColor(){

    for(let i=0;i<priorityColors.length;i++){

        const priorityElement = priorityColors[i];

        if(priorityElement.classList.contains("active")){
            return priorityElement.classList[1];
    
        }

    }

}