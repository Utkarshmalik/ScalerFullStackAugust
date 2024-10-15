Array.prototype.customMap = function(callback){

    if(typeof callback !==  'function'){
        throw new TypeError("In a map callback function should be of type function");
    }

    //Create a new empty array for the results
    let output = [];

    //Iterate over the array 
    for(let i=0;i<this.length;i++){

        let ans = callback(this[i],i,this);

        //Push the result of the callback into the 'output' array
        output.push(ans);
    }

    // Return the new array
    return output;
}


let arr = [1,2,3,4,5];



const modifiedArr = arr.customMap((element,index,array)=>{
    return element  * element;
})


// const modifiedArr = arr.customMap(23);

console.log(modifiedArr);