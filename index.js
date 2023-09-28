const API_KEY = 'eba838467bf6979b9958a33bf8666298';
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherImage = document.querySelector(".weather-image ")
async function checkWeather(city){
    const response = await fetch(API_URL + city + `&appid=${API_KEY}`);
    if(response.status=== 404){
        document.querySelector(".city").innerHTML = "Your entered city name is invalid!";

    }
    else if(!city){
        document.querySelector(".city").innerHTML = "Please enter city name!";
    }
    else{
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML= data.name + " City " ;
        document.querySelector(".tempature").innerHTML = "Temprature " + data.main.temp + "°C";
        document.querySelector(".wind_speed").innerHTML = "Wind Speed " + data.wind.speed + "km/h";
        document.querySelector(".wind_condition").innerHTML ="Weather Condition: " + data.weather[0].main;
        document.querySelector(".humidity").innerHTML ="Humidity " + data.main.humidity + "%";
        if(data.weather[0].main == "Clouds"){
            weatherImage.src = "./images/clouds.png";
        }
        else if(data.weather[0].main == "Clouds"){
            weatherImage.src = "./images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherImage.src = "./images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherImage.src = "./images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherImage.src = "./images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherImage.src = "./images/mist.png";
        }
    }
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

