

Array.prototype.customReduce = function(callback,initalValue){

            // Step 1: Throw a TypeError if 'callback' is not a function
        if(typeof callback !==  'function'){
        throw new TypeError("In a reduce callback function should be of type function");
    }

        // Step 2: Set the startIndex  and accumulator
    let accumulator = arguments.length >=2 ? initalValue : this[0];
    let startIndex = arguments.length>=2 ? 0 : 1;


        // Step 3: Iterate over the array
    for(let i=startIndex;i<this.length;i++){

                  // Step 4: Execute callback and Update the accumulator
        let output = callback(accumulator, this[i],i,this);
        accumulator = output;

    }

    // Step 5: Return the accumulated value
    return accumulator;
}


// Summing up numbers in an array

const numbers = [1, 2, 3, 4, 5];

const ans = numbers.customReduce((accumulator,element,i,arr)=>{

    return accumulator + element;
},100)

console.log(ans);






// numbers.reduce((accumulator, element,index,arr)=>{


// },initalValue)


//first iteration (accumulator = 0 , element = 1) => 1
//second iteration  (accumulator = 1 , element = 2) => 3
//third iteration  (accumulator = 3 , element = 3) => 6
//fourth iteration  (accumulator = 6 , element = 4) => 10
//fifth iteration  (accumulator = 10 , element = 5) => 15
// accumulator = 15;





