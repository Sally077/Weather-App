
// open weather app API Key

var APIKey = "f3aa59891896ea518aff933a0a0bdae6";
lat = 51.5073219;
lon = -0.1276474;

// add array for Cities

cityArray = ["London", "Athens", "Barcelona", "New York", "Paris"];

// add method for City lat and lon

const coordinates = {

    city: "London",
    lat: 51.5073219,
    lon: -0.1276474,

    city: "Athens",
    lat: 37.9839412,
    lon: 23.7283052,

    city: "Barcelona",
    lat: -5.9514918,
    lon: 2.1774322,

    city: "New York",
    lat: 40.7127281,
    lon: -74.0060152,

    city: "Paris",
    lat: 448.8588897,
    lon: 2.3200410217200766,

    city: "London",
    lat: 51.5073219,
    lon: -0.1276474,
};
// testing to see if a specific city can be selected
console.log(coordinates.city);

// Query URL details
var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" +APIKey;

// set today as variable for moment
var today = moment();
$("#currentDay").text(today.format("D MMM YYYY"));

// latitude and logitude locations: https://api.openweathermap.org/geo/1.0/direct?q=barcelona&limit=5&appid=f3aa59891896ea518aff933a0a0bdae6
// London "lat": 51.5073219, "lon": -0.1276474,
// New York "lat": 40.7127281, "lon": -74.0060152,
// Athens "lat": 37.9839412, "lon": 23.7283052,
// paris "lat": 48.8588897, "lon": 2.3200410217200766,
// Barcelona "lat": -5.9514918, "lon": 2.1774322,

// added search button for city

$("#search-button").on("click" , function(event) {
    event.preventDefault();

})
var name  = $("#search-input").val().trim();


// Ajax used to pull data
$.ajax({
url:queryURL,
method: "GET",
}).then(function(response) {
console.log(queryURL);
console.log(response);


// Transfer content to HTML
$(".city").html("<h1>" + response.name + " Weather Details</h1>");
$(".date").text("today" + today); //-------------------------------check documentation needs fixing
$(".icon").text("Wind Speed: " + response.weather[0].icon); //-----check documentation needs fixing
$(".wind").text("Wind Speed: " + response.wind.speed);
$(".temp").text("Wind Speed: " + response.main.temp);
$(".humidity").text("Humidity: " + response.main.humidity);

// Convert the temp to Celsius
var tempC = response.main.temp - 273.15;

// add temp content to html
$(".temp").text("Temperature (K) " + response.main.temp);
$(".tempC").text("Temperature (C) " + tempC.toFixed(2));

// console log 
// city 
console.log(response.name);
// date
console.log(today);
// icon
console.log(response.weather[0].icon); // 04n ?test to see if icon code is responsive in html
console.log(response.main.temp - 273.15); // convert Celsius = temp - 273.15
// humidity
console.log(response.main.humidity);
// windspeed
console.log(response.wind.speed);

});


// -------------------------------------------------------------------




