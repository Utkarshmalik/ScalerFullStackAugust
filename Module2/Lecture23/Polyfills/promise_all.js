
Promise.myPromiseAll =function(arrayOfPromises){

    const resolvePromiseArr = [];
    let totalPromisesResolved = 0;
    const countPromises = arrayOfPromises.length;


    return new Promise((resolve,reject)=>{

        arrayOfPromises.forEach((promise,index)=>{

            promise
            .then((value)=>{

                totalPromisesResolved++;
                resolvePromiseArr[index]=value;

                if(totalPromisesResolved===countPromises){
                    resolve(resolvePromiseArr);
                }

            })
            .catch((error)=>{
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
        resolve("Second");
    },500);
});

const promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
         resolve("Third");
    },2500);
});


Promise.myPromiseAll([promise1, promise2, promise3])
.then((values)=>{
    console.log(values);
})
.catch((err)=>{
    console.log(err);
})
