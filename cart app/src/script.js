document.addEventListener
("DOMContentLoaded",()=>{
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const cityNameElem = document.getElementById("city-name");
    const tempratureElem = document.getElementById("temprature");
    const descriptionElem = document.getElementById("description");
    const errormessageElem = document.getElementById("error-message");
    const weatherResult = document.getElementById("weather-result");
    
API_KEY="3a2455ac9e43373be93ff2271b272646";

getWeatherBtn.addEventListener("click", async ()=>{
    const city= cityInput.value.trim();
    if(city==="") return;

    try {
        const weatherData= await getWeather(city);
        displayWeather(weatherData);
    } catch (error) {
        displayError();    }

}


,);
 async function getWeather(city){ 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url); 
    console.log("Response",response);
    if(!response.ok){
        throw new Error("City not found");
    } 
    const data = await response.json();
  return data;

  }
 function displayWeather(data){ 
     const {name,weather, main}=data;
     console.log("Weather Data:",data);
        cityNameElem.textContent=name;
        tempratureElem.textContent=`${main.temp} °C`;
        descriptionElem.textContent=weather[0].description;
        errormessageElem.classList.add("hidden");   
        weatherResult.classList.remove("hidden");



  }
 function displayError(message){ 
    weatherResult.classList.add("hidden");
    errormessageElem.classList.remove("hidden");
  }


});
