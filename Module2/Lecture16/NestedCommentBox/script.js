
const submitBtn = document.querySelector("#submitComment");
const commentInput = document.querySelector("#commentInput");
const commentsContainer = document.querySelector(".commentsContainer");


submitBtn.addEventListener("click",(e)=>{

    //get the value from the input box 

    const commentText = commentInput.value.trim();


    //add a comment with that value 
    addComment(commentText);


    //clean the text in the input box 
    commentInput.value = '';

})



function addComment(text){

    console.log("adding a new comment with text", text);

    const commentDiv = document.createElement("div");
    commentDiv.setAttribute("class","comment");

    commentDiv.innerHTML = `
                 <p> ${text} </p>
                <button class="replyButton"> Reply </button>
                <div class="repliesContainer">
                </div>
                <textArea class="replyInput" placeholder="Write a reply.."></textArea>
        `;

        commentsContainer.appendChild(commentDiv);

}


commentsContainer.addEventListener("click",(e)=>{

    
    if(e.target.classList.contains("replyButton")){

     //get the reply input value for this comment
    
     const commentParent = e.target.parentElement;
     const replyInput= commentParent.querySelector(".replyInput");
    const repliesContainer = commentParent.querySelector(".repliesContainer");
     const replyValue = replyInput.value.trim();

     if(replyValue){

        const reply = document.createElement('p');
        reply.innerText = replyValue;
        repliesContainer.appendChild(reply);

        replyInput.value="";

     }

    }

})