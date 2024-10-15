// Problem 1
// Flattening an Array

// Problem Statement: Flatten Nested Array

// You are given a nested array containing array elements. Your task is to write a JavaScript function to flatten this nested array into a single-dimensional array, where all the nested arrays' elements are moved to the top-level array.


Array.prototype.flatten = function(){

    let newArr = [];


    for(let i=0;i<this.length;i++){

        if(Array.isArray(this[i])){

             let innerFlattenedArr =  this[i].flatten();

             newArr.push(...innerFlattenedArr);

        }else{

            newArr.push(this[i]);

        }

    }

    return newArr;
}





const arr1 = [1, [2, 3], [4, [5, 6]]];

//[1, 2, 3, 4, 5, 6]

// flatten([2,3])=> [2,3]
// flatten([4,[5,6]]) => [4,5,6]

const ans1= arr1.flatten();

console.log(ans1);

const arr2=[1,[[2,3,4],[5,6,7],[9,[10]]],12,14,56];


// [12,3,4,5,6,7,9,10,12,14,56]

// flatten([[2,3,4],[5,6,7],[9,[10]]])
// [2,3,4,5,6,7,9,10]

const ans2= arr2.flatten();

console.log(ans2);

