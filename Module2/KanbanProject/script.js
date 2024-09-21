const addBtn = document.querySelector(".add-btn");
const model = document.querySelector(".model_cont");
const priorityColors = document.querySelectorAll(".priority_color");
const textArea = document.querySelector(".textarea_cont");
const pendingContainer = document.querySelector(".pending_cont");
const priorityMenuColors = document.querySelectorAll(".color");
const deleteButton = document.querySelector(".remove-btn");
let isDeletedModeActivated = false;
const colors = ["pink","blue","purple","green"];


addBtn.addEventListener("click",()=>{
    model.style.display = "flex";
})

deleteButton.addEventListener("click",(e)=>{

     //if de-activated : make color : red 
    //if activated : make color : default 


    if(!isDeletedModeActivated){
        e.target.classList.add("red");

    }else{
         e.target.classList.remove("red");
    }

    isDeletedModeActivated = ! isDeletedModeActivated;

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

    const lockBtn = ticketContainer.querySelector(".lock_unlock");
    const ticketArea = ticketContainer.querySelector(".ticket_area");
    const ticketPriority = ticketContainer.querySelector(".ticket_color");


    lockBtn.addEventListener("click",(e)=>handleLockUnlockClick(e,ticketArea));
    ticketContainer.addEventListener("click",handleTicketContainerClick);
    ticketPriority.addEventListener("click",handleTicketPriority);

    pendingContainer.appendChild(ticketContainer);
}

function handleTicketPriority(e){

    console.log(e.currentTarget);

    const existingColor = e.currentTarget.classList[1];


        const existingColorIndex = colors.indexOf(existingColor);
        ///existingIndex : 0 -> 1
        // existingIndex : 1 -> 2
        // existingIndex : 2  -> 3
        //existingIndex : 3 -> 0 

        const newColorIndex = (existingColorIndex + 1)%colors.length;
        const newColor = colors[newColorIndex];


        e.currentTarget.classList.remove(existingColor);
        e.currentTarget.classList.add(newColor);

}

function handleTicketContainerClick(e){

    //check first if the delete nbutton is activated
    //if activated : hide/remove that ticket
    if(isDeletedModeActivated){
        e.currentTarget.remove();
    }


}

function handleLockUnlockClick(e, ticketArea){

    console.log(e);

    //if the ticket is locked : unlock 
    // if the ticket is unlocked : lock 
    
    const isLocked = e.target.classList.contains("fa-lock");

    if(isLocked){
            //remove the fa-lock 
            //add the fa-unlock 
        e.target.classList.remove("fa-lock");
        e.target.classList.add("fa-unlock");
        ticketArea.setAttribute("contenteditable","true");

    }else{
            //add the fa-lock 
            //remove the fa-unlock 
        e.target.classList.add("fa-lock");
        e.target.classList.remove("fa-unlock");
        ticketArea.setAttribute("contenteditable","false");
    }
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





//e.target : is the elemnt which is actully clicked 
//e.currentTarget : on which the event listenr is actujally being apploed 

