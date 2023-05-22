    
var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;


//CONSUMO API WEB//
const APIkey = "4fecb089c0fa417a4b11ea1e55f7a414";
    const URL_API = `https://api.openweathermap.org/data/2.5/weather?&units=metric&lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${APIkey}`;
  
    async function climaActual() {
      const resp = await fetch(URL_API);
      const data = await resp.json();
  
      console.log(data);
  
      document.querySelector("#city").innerHTML = data.name;
      document.querySelector("#temp").innerHTML = data.main.temp;
      document.querySelector("#pron").innerHTML = data.weather[0].description;
    }
  
    climaActual();
 }
  
  
// const APIkey = "4fecb089c0fa417a4b11ea1e55f7a414";
// const URL_API = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&lat=34.9927&lon=-58.3614&appid=4fecb089c0fa417a4b11ea1e55f7a414';

// // Latitude: -34.9927
// // Longitude: -58.3614
// // const appid=APIkey;

// async function climaActual(){
//     const resp = await fetch(URL_API); //+ '&lat=' + position.coords.latitude + "&lon=" + position.coords.longitude + '&appid='+ APIkey);
//     let data = await resp.json();

//     console.log(data);

//     document.querySelector("#city").innerHTML= data.name;
//     document.querySelector("#temp").innerHTML= data.main.temp;
//     document.querySelector("#pron").innerHTML= data.weather[0].description;

// }

// climaActual();

 

