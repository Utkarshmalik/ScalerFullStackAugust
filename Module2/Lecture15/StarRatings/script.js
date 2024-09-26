


const allStarsDiv = document.querySelector(".stars");
const allStars = document.querySelectorAll(".star");
const ratingDisplay = document.getElementById("rating");


allStarsDiv.addEventListener("click",(e)=>{


    if(e.target.classList.contains("star")){


       const starValue = parseInt(e.target.getAttribute("data-value"));


       for(let i=0;i<allStars.length;i++){

        let starElement = allStars[i];

        //remove the filled class if already there
        starElement.classList.remove("filled");

        if(i< starValue){

            //add a filled class to my element 

            starElement.classList.add("filled");
        }
       }

       ratingDisplay.innerText = starValue;

       
    }

})



