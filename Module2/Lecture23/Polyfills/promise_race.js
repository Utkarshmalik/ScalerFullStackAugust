
Promise.myPromiseRace =function(arrayOfPromises){

    return new Promise((resolve,reject)=>{

        arrayOfPromises.forEach((promise)=>{

            promise
            .then((value)=>{
                
                //ith promise is resolved
                resolve(value);

            })
            .catch((error)=>{

                //ith promise got rejected
                reject(error)
            })


        })
    })
}


const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("First");
        // reject("First promise rejected");
    },1000);
});

const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("Second");
    },500);
});

const promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
         resolve("Third");
    },2500);
});


Promise.myPromiseRace([promise1, promise2, promise3])
.then((values)=>{
    console.log(values);
})
.catch((err)=>{
    console.log(err);
})
