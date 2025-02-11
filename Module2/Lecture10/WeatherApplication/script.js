const form = document.querySelector("form");
const searchField = document.querySelector(".searchField");
const apikey="c77a19bb3bfc4086886163212241409";
const temperatureField = document.querySelector(".temp");
const emojiField = document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather_condition span");
const dateField = document.querySelector(".time_location span");
const cityName = document.querySelector(".time_location p");

form.addEventListener("submit",search);

function search(e){

    e.preventDefault();

    const searchValue = searchField.value;

    fetchData(searchValue);
}

async function fetchData(query){

    console.log("making an api call to fetch the data for query ",query);

    let url = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${query}`;

   
    try{

        //http response
        const res = await fetch(url);

        //extract the json body from the http response 
        const data=   await  res.json();

        // console.log(data);

        
        let currentTemp = data.current.temp_c;
        let currentCondition = data.current.condition.text
        let locationName = data.location.name;
        let localTime = data.location.localtime
        let conditionEmoji = data.current.condition.icon

        console.log(currentTemp);
        console.log(locationName);
        console.log(localTime);
        console.log(currentCondition);
        console.log(conditionEmoji);

        updateDOM(currentTemp, locationName, localTime, conditionEmoji, currentCondition);


    }catch(err){


    }

}


function updateDOM(temp,locationName, time,emoji,condition){

    temperatureField.innerText = temp;
    cityName.innerText = locationName;
    console.log(emojiField);
    emojiField.src = emoji;
    weatherField.innerText = condition;
    
    const exactTime = time.split(" ")[1];
    const exactDate = time.split(" ")[0];
    const exactDay =  getDayFullName(new Date(exactDate).getDay());

    const fullDateTime = `${exactTime} ${exactDay} ${exactDate}`;

    dateField.innerText = fullDateTime;

}


function getDayFullName(num){
    const daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return daysOfWeek[num];
}