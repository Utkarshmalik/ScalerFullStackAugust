Function.prototype.customBind = function(requiredObject,...args1){

    const functionToExecute = this;

    return function (...args2){
        functionToExecute.call(requiredObject,...args1,...args2);
    }
   
}


const parent = {
    health:50,
    addHealth: function (num1,num2){
        this.health+= num1+num2;
    }
}

const child = {
    health:70
}


const addHealthFn  = parent.addHealth.customBind(child,10,20);

console.log(child.health);

addHealthFn();

console.log(child.health);
