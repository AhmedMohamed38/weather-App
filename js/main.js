var MyWeather;
var MycurWeather;
let search = document.getElementById("search")
let btn = document.querySelector(".btn")
let city;
let contact = document.querySelector("#contact")
let home = document.querySelector("#home")
let home2 = document.querySelector("#home2")
let week = [ "Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday",]
let Month = ["Janu","Feb","Mar","Apr","May","June","July","Aug","Oct","Nov","Des"]





async function WeaterApi(city) {
  var response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e01291b06d7a41a29d9143737241606&q=${city}&days=3`)
  var finalData = await response.json();
  MycurWeather = finalData
  MyWeather = finalData.forecast.forecastday
  displayw()


  // return finalData


}
WeaterApi("cairo")
function search1(){
  city = search.value

  WeaterApi(city)

  
  displayw()
}
document.addEventListener("keyup",function(e){
  if(e.key == "Enter"){
    search1()
    }
})
btn.addEventListener("click", function () {
  search1()
})











function displayw() {
  var container = ``
  for (var i = 0; i < MyWeather.length; i++) {
    var n = MyWeather[i].date
    const date = new Date(n).getDay();
    const month = new Date(n).getMonth();
    const day = new Date(n).getDate();

    if (i == 0) {
      container += `<div class="col-md-4 ">
          <div class="rounded-3 bg-white h-me  m-3 shadow p-4">
            <div class="d-flex justify-content-between align-items-center">
            <h4 class="text-primary "> ${week[date]}</h4>
            <p><span >${day}</span>   ${Month[month]}</p>
            </div>
            <div class="d-flex align-items-center justify-content-center flex-column">
              <h3 class="text-center text-primary">${MycurWeather.location.name}</h3>
              <h2 class="text-center">${MycurWeather.current.feelslike_c}°C</h2>      
              <img class="w-25 my-3 m-auto" src="https:${MycurWeather.current.condition.icon}" alt="">
              <h4 class="me-auto text-primary">${MycurWeather.current.condition.text}</h4>
            </div>
            <ul class="list-unstyled d-flex justify-content-around align-items-center">
              <li><i class="fa-solid fa-umbrella"></i><span class="ps-1">${MyWeather[i].day.daily_will_it_rain}%</span></li>
              <li><i class="fa-solid fa-wind"></i><span class="ps-1">${MycurWeather.current.wind_kph} Kph</span></li>
              <li><i class="fa-solid fa-compass"></i><span class="ps-1">${MycurWeather.current.wind_dir} </span></li>
              
              
            </ul>
          </div>
        </div>`

    } else {
      container += `<div class="col-md-4">
          <div class="rounded-3 bg-white h-me  m-3 shadow p-4">
            <h4 class="text-primary text-center "> ${week[date]}</h4>
            <div class="d-flex align-items-center justify-content-center flex-column">
              <h2 class="text-center my-3 ">${MyWeather[i].day.maxtemp_c}°C</h2>
              <img class="w-25 m-auto my-4" src="https:${MyWeather[i].day.condition.icon}" alt="">
              <h4 class="me-auto  text-primary">${MyWeather[i].day.condition.text}</h4>
            </div>
            <ul class="list-unstyled d-flex justify-content-around align-items-center">
              <li><i class="fa-solid fa-umbrella"></i><span class="ps-1">${MyWeather[i].day.daily_will_it_rain}%</span></li>
              <li><i class="fa-solid fa-wind"></i><span class="ps-1">${MycurWeather.current.wind_kph} Kph</span></li>
              
            </ul>
          </div>
        </div>`

    }
    

    console.log(week[date])


  }
  document.getElementById("weather").innerHTML = container

  search.value = ""
}




contact.addEventListener("click", function () {
  document.querySelector(".body").classList.add("d-none")
  document.querySelector(".contact").classList.remove("d-none")
})
home.addEventListener("click", function () {
  document.querySelector(".body").classList.remove("d-none")
  document.querySelector(".contact").classList.add("d-none")
})
home2.addEventListener("click", function () {
  document.querySelector(".body").classList.remove("d-none")
  document.querySelector(".contact").classList.add("d-none")
})


$("a[href ^='#']").click(function(e){
  let x =$("body,html").animate({scrollTop: $(x).offset().top},1000)
})


$(document).ready(function(){
  $(".plaseHolder").fadeOut(2000,function(){
    $("body").css({overflow : "auto"})
  })
})










