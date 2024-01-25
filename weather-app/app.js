// weather api
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const input = document.querySelector('.city-input');
const searchBtn = document.querySelector('.search-btn');
const apiKey = "2a921f6370c2f9fe2738622c3e2ea0ca";
const weathericon = document.querySelector('.weather-icon');
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
let lastsearch = localStorage.getItem("lastsearch");
async function checkWeather(cityname) {
    const response = await fetch(apiUrl +`&appid=${apiKey}&q=${cityname}`);
    const data = await response.json();
    console.log(data);
    if (response.status === 404) {
      input.placeholder = 'invalid city name'
    } else {
      input.placeholder = 'enter city name';
      temp.innerHTML = `${Math.floor(data.main.temp)}&deg;c`;
      humidity.innerHTML = `${data.main.humidity}%`;
      wind.innerHTML = `${data.wind.speed} km/h`;
      city.innerHTML = data.name;
      removetheme();
      setTheme(data.weather[0].main);
    }
   
}


searchBtn.addEventListener('click', ()=>{
  checkWeather(input.value);
  localStorage.setItem("lastsearch", input.value);
  input.value = '';
});
input.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    checkWeather(input.value);
    localStorage.setItem("lastsearch", input.value);
    input.value = '';
  }
});
window.addEventListener('load', () => {
  const lastSearch = localStorage.getItem("lastsearch");
  if (lastSearch) {
    checkWeather(lastSearch);
  } else {
    checkWeather('punjab');
  }
});







// time theme
const card = document.querySelector('.card');
var currentDate = new Date();

var hours = currentDate.getHours();
function setTheme(weather){
  if(weather === 'Clouds'){
    weathericon.src = 'images/clouds.png';
    if (hours >= 4 && hours < 20){
      card.classList.add('day-cloud');
    } else {
      card.classList.add('night-cloud');
    }
  } else if (weather === 'Clear'){
    weathericon.src = 'images/clear.png';
    if (hours >= 4 && hours < 12){
      card.classList.add('morning');
    } else if (hours >= 12 && hours < 16){
      card.classList.add('day');
    } else if (hours >= 16 && hours < 20){
      card.classList.add('evening');
    } else {
      card.classList.add('night');
    }
  } else if (weather === 'Rain'){
    weathericon.src = 'images/rain.png';
    if (hours >= 4 && hours < 20){
      card.classList.add('day-rain');
    } else {
      card.classList.add('night-rain');
    }
  } else if (weather === 'Drizzle'){
    weathericon.src = 'images/drizzle.png';
    if (hours >= 4 && hours < 20){
      card.classList.add('day-drizzle');
    } else {
      card.classList.add('night-drizzle');
    }
  }  else if (weather === 'Mist' || weather === 'Fog'){
    weathericon.src = 'images/mist.png';
    if (hours >= 4 && hours < 20){
      card.classList.add('day-mist');
    } else {
      card.classList.add('night-mist');
    }
  }
  else if (weather === 'Snow'){
    weathericon.src = 'images/mist.png';
    if (hours >= 4 && hours < 20){
      card.classList.add('day-snow');
    } else {
      card.classList.add('night-snow');
    }
  }
}
function removetheme(){
  card.classList.remove('morning');
  card.classList.remove('day');
  card.classList.remove('evening');
  card.classList.remove('night');
  card.classList.remove('day-cloud');
  card.classList.remove('night-cloud');
  card.classList.remove('day-drizzle');
  card.classList.remove('night-drizzle');
  card.classList.remove('day-mist');
  card.classList.remove('night-mist');
  card.classList.remove('day-snow');
  card.classList.remove('night-snow');
}