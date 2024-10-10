
//polfills

Function.prototype.myCall =function(requiredObject,...args){

    const functionToExecute = this;

    requiredObject.fn  = functionToExecute;

    requiredObject.fn(...args);

    delete requiredObject.fn;
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

// parent.addHealth.call(child, 60,70);

parent.addHealth.myCall(child,60,70);
console.log(child);

console.log(child.health);


// console.log(child.toString());
// console.log(parent.toString());



let cap = {
    name: "Steve",
    team: "Cap",
    petersTeam: function (mem1, mem2, ...otherMem) {
        console.log(`Hey ${this.name} I am your neighborhood's  spiderman and i belong to ${this.team}'s team`);
        console.log(`I am working with ${mem1} & ${mem2} with ${otherMem}`);
    }
}

let ironMan = {
    name: "Tony",
    team: "Iron Man"
}

// cap.petersTeam("Kavitha","Srijan","Gajanan");

cap.petersTeam.myCall(ironMan,"Kavitha","Srijan","Gajanan");
