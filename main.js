// variables
const APIKey = "dbdcf6becc4e448c01037923ba02671c";
let btn = document.querySelector("button");
let input = document.querySelector("input");
let img = document.querySelector("img");
let temp = document.getElementById("temp");
let desc = document.getElementById("desc");
let MinMax = document.getElementById("MinMax");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");



// main function
btn.addEventListener("click",()=>{
  if(input.value == ""){
    input.focus()
  }else{
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${APIKey}&units=metric`;
    let xhr = new XMLHttpRequest();
    xhr.open("GET",API,true);
    xhr.send();
    xhr.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        let weatherData = JSON.parse(this.responseText);
        let card = document.querySelector(".card")
        card.style.height = "550px";
        let content = document.querySelector('.weather')
        content.style.display = 'block';
        document.getElementById("city").innerHTML = weatherData.name;
        img.src = `./icons/${weatherData.weather[0].main}.png`;
        temp.innerHTML = `${Math.round(weatherData.main.temp)}°c`;
        desc.innerText = weatherData.weather[0].description;
        MinMax.innerHTML = `<i class="fa-solid fa-temperature-arrow-down"></i> ${Math.round(weatherData.main.temp_min)}°c / <i class="fa-solid fa-temperature-arrow-up"></i> ${Math.round(weatherData.main.temp_max)}°c`;
        humidity.innerHTML = `<i class="fa-solid fa-water"></i> ${weatherData.main.humidity}%`;
        wind.innerHTML = `<i class="fa-solid fa-wind"></i> ${Math.round(weatherData.wind.speed)} km/h`;
      }else if(this.readyState == 4 && this.status == 404){
        window.alert("Invalid City Name")
      }
    }
  }
})

// date function
function date() {
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  const dateString = currentDate.toLocaleString('en-US', options);
  document.querySelector(".date").innerHTML += dateString
};
date()
