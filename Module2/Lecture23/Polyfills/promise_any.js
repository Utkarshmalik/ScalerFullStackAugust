
Promise.myPromiseAny =function(arrayOfPromises){

    let totalRejectedPromises = 0;
    const rejectedPromiseReasonsArr = [];
    const countPromises = arrayOfPromises.length;

    return new Promise((resolve,reject)=>{

        arrayOfPromises.forEach((promise,index)=>{

            promise
            .then((value)=>{
                resolve(value);
            })
            .catch((error)=>{
                totalRejectedPromises++;
                rejectedPromiseReasonsArr[index]=error;

                if(totalRejectedPromises === countPromises ){
                    reject(new AggregateError(rejectedPromiseReasonsArr,"All promises are rejected"));
                }
            })


        })
    })
}


const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("First");
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
         reject("Third");
    },2500);
});


Promise.myPromiseAny([promise1, promise2, promise3])
.then((values)=>{
    console.log(values);
})
.catch((err)=>{
    console.log(err);
    console.log(err.errors);
})
