

console.log("Start");


const fetchUserDataPromise = new Promise(function(resolve, reject){

     //perform a async operation 

    setTimeout(() => {
        const data = {
            name:"Utkarsh",
            age:31
        }
        // resolve(data);
        reject("Server is down")

    }, 2000);
});



fetchUserDataPromise
.then((user)=>{
    console.log(user.name);
    console.log(user.age);
})
.catch((err)=>{
    console.log("Something went wrong",err);
})
.finally(()=>{
    console.log("API call was made to fetch user details")
})



console.log("end");