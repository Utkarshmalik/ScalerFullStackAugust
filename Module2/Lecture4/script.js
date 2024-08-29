// var a = 20;

// function parent(){
//     console.log(a);
// }

// parent();




function  parent(){
    
    var a= 10;

    function child(){
        console.log(a);

    }

    child();
}

parent();


// Lexical scope is the ability for a function scope to access variables from the parent scope. We call the child function to be lexically bound by that of the parent function


// Every Nested function will have access to its parent's properties or variables and they will be able to work with them and the scope that is formed is lexical scope. the functions may access all variables from their parent scopes up to the global scope


