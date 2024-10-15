
Array.prototype.customFilter = function(callback){

    // Step 1: Throw a TypeError if 'callback' is not a function
    if(typeof callback !==  'function'){
        throw new TypeError("In a filter callback function should be of type function");
    }

    // Step 2: Create a new empty array for the output
    let output = [];

            // Step 3: Iterate over the array
    for(let i=0;i<this.length;i++){

       // Step 4: Execute 'callback' for each element
        let shouldInclude = callback(this[i],i,this);

        // If 'callback' returns true, push the current element to 'output'
        if(shouldInclude){
            output.push(this[i]);
        }
    }

// Step 5: Return the new array
    return output;
    
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



const evenNumbers = numbers.customFilter(function(element,index,arr){

    //return a boolean 


    //true : that element will be added to the output array 
    //false : that element wont be added to the output array 

    return  element%2===0;
})

console.log(evenNumbers);