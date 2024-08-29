
// function parent(){

//     let x=5;

//     function child(){
        
//         let y=10;

//         return x+y;
//     }

//     return child;
// }

// let f1 = parent();
// let ans= f1();
// console.log(ans);


// In JavaScript, a closure is a function that "remembers" the environment (scope) in which it was created, even after that environment has finished executing. This allows the function to access variables from an outer function's scope even after the outer function has returned.











function grandParent(){

    let  a = 5;
    //100k
    
    function parent(){

     let b=10;

        function child(){
            
            let c=15;

            return b+c;
        }

        return child;
    }

    return parent;
}


let parent = grandParent();
let child= parent();
let ans= child();
console.log(ans);



// A closure is a feature in JavaScript where an inner function has access to the variables and scope of its outer function even after the outer function has finished executing. This allows the inner function to "remember" and use those variables, creating a persistent scope that can be referenced later.

