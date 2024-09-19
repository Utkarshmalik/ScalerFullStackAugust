const addBtn = document.querySelector(".add-btn");
const model = document.querySelector(".model_cont");
const priorityColors = document.querySelectorAll(".priority_color");
const textArea = document.querySelector(".textarea_cont");
const pendingContainer = document.querySelector(".pending_cont");
const priorityMenuColors = document.querySelectorAll(".color");



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

    //find the selected color
    const cColor = findActiveColor();
    console.log(cColor);

    //what is the text entered by the user
    const content = textArea.value;
    console.log(content);

    createTicket(cColor, content);


    //clear the textarea
    textArea.value="";


    //close the model 
    model.style.display = "none";

})


function createTicket(color, content){
    console.log(`create a new ticket with color : ${color} and content : ${content}`)

    const ticketContainer = document.createElement("div");
    ticketContainer.setAttribute("class","ticket_cont");

    const ticketId = randomTicketId();

    //innerHTML
    ticketContainer.innerHTML = `
    <div class="ticket_color ${color}"> </div>
        <div class="ticket_id"> #${ticketId}</div>
        <div class="ticket_area"> ${content} </div>
        <div class="lock_unlock">
            <i class="fa fa-lock"></i>
    </div>
    `;

    pendingContainer.appendChild(ticketContainer);
}







function randomTicketId(){

    return "wkfjbkfbwjkf2345"
}



function findActiveColor(){

    for(let i=0;i<priorityColors.length;i++){

        const priorityElement = priorityColors[i];

        if(priorityElement.classList.contains("active")){
            return priorityElement.classList[1];
    
        }

    }

}



for(let i=0;i<priorityMenuColors.length;i++){

    const priorityMenuColor = priorityMenuColors[i];

    priorityMenuColor.addEventListener("click",(e)=>{
        
        const selectedColor = e.target.classList[1];

        console.log("filter the tickets only this color ",selectedColor);

        const allTickets = document.querySelectorAll(".ticket_cont");

        for(let i=0;i<allTickets.length;i++){

            const ticketContainer = allTickets[i];

            const ticketColorElement = ticketContainer.querySelector(".ticket_color"); 

            const ticketColor = ticketColorElement.classList[1];

            if(ticketColor!==selectedColor){
                ticketContainer.style.display="none";
            }else{
                ticketContainer.style.display="block";
            }
           
        }
      
    })

    priorityMenuColor.addEventListener("dblclick",(e)=>{
        
        console.log("element is double clicked",e.target);

        const allTickets = document.querySelectorAll(".ticket_cont");

        for(let i=0;i<allTickets.length;i++){
            const ticketContainer = allTickets[i];
            ticketContainer.style.display="block";
        }


    })
}