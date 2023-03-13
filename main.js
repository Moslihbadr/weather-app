const APIKey = "dbdcf6becc4e448c01037923ba02671c"
let btn = document.querySelector("button")
let input = document.querySelector("input")

btn.addEventListener("click",()=>{
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${APIKey}&units=metric`
  let xhr = new XMLHttpRequest();
  xhr.open("GET",API,true)
  xhr.send()
  xhr.onreadystatechange = function(){
    // console.log(this.responseText)
    if(this.readyState == 4 && this.status == 200){
      let data = JSON.parse(this.responseText);
      console.log("this.responseText")
      console.log(data)
      document.body.append(data.main.temp)  
      document.body.append(data.main.humidity)
      document.body.append(data.wind.speed)
      document.body.append(data.weather[0].main) // Ex:clouds
    }
  }
})