//feature 1

let now = new Date();
let hour = now.getHours();
let minute = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

let time = document.querySelector("#currenttime");

time.innerHTML = `${day} ${hour}:${minute}`;

//feature 2 and search engine
function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let city = cityInput;

  let h3 = document.querySelector("h3");
  h3.innerHTML = `${cityInput.value}`;

  let apiKey = "ff1d9ea9376b5c27a82e04fc2b2abdbb";
  let currentCity = cityInput.value;
  let units = "imperial";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${apiKey}&units=${units}`;

  axios.get(`${url}`).then(showTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let city = response.data.name;

  let currentTemp = document.querySelector("#currentTemperature");
  currentTemp.innerHTML = `${temperature}°F`;
}
