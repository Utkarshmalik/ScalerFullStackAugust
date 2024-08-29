// We are given an array, which has the radius of different circles, we need to find the area, circumference and diameter for all the radiuses.


let myRadiusArray = [2, 3, 4, 5, 8]


function calculate(radiusArr, logic){

    let results = [];

    for(let i=0;i<radiusArr.length;i++){
        results.push(logic(radiusArr[i]));
    }

    return results;
    
}

function calculateAreaLogic(radius){
    return 3.14 * radius * radius;
}

function calculateCircumferenceLogic(radius){
    return 2*3.14*radius;
}

function calculateDiameterLogic(radius){
    return 2*radius;
}

let finalAreas = calculate(myRadiusArray, calculateAreaLogic);
console.log(finalAreas);

let finalDiameter = calculate(myRadiusArray, calculateDiameterLogic);
console.log(finalDiameter);

let finalCircumference = calculate(myRadiusArray, calculateCircumferenceLogic);
console.log(finalCircumference);








//DRY : Donot Repeat Yourself 




//HOF : that accepts fn as a arugement (cb) or returns functons as output from the function 