
// open weather app API Key

var APIKey = "f3aa59891896ea518aff933a0a0bdae6";
lat = 51.5073219;
lon = -0.1276474;

// add array for Cities

cities = ["London", "Athens", "Barcelona", "New York", "Paris"];



// function displayCitiesInfo() {

// Query URL details
var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" +APIKey;

// set today as variable for moment
var today = moment();


// latitude and logitude locations: https://api.openweathermap.org/geo/1.0/direct?q=barcelona&limit=5&appid=f3aa59891896ea518aff933a0a0bdae6
// London "lat": 51.5073219, "lon": -0.1276474,
// New York "lat": 40.7127281, "lon": -74.0060152,
// Athens "lat": 37.9839412, "lon": 23.7283052,
// paris "lat": 48.8588897, "lon": 2.3200410217200766,
// Barcelona "lat": -5.9514918, "lon": 2.1774322,


// Query for 5 day forecast



// function to get data from 5 day API

function searchButton() {
  const newName = document.getElementById(cityInput);
  const location = document.getElementById(location);
  location.innerHTML = " "+newName.val+" "

  fetch("https://api.openweathermap.org/data/2.5/forecast?q=+newName.val+&appid=" +APIKey)

  // -------------------------incomplete data need to complete to add 5 day forecast to bootstrap cards
}



// added search button for city

$("#search-button").on("click" , function(event) {
    event.preventDefault();

})
 var name  = $("#city-input").val().trim();


// Ajax used to pull data
$.ajax({
url:queryURL,
method: "GET",
}).then(function(response) {
$("#cities-view").text(JSON.stringify(response));
console.log(queryURL);
console.log(response);



// Transfer content to HTML
$(".location").html("<h2>" + response.name + " Weather Details</h2>");
$(".date").text(today.format("D MMM YYYY")); 
$(".image").text("Wind Icon: " + response.weather[0].icon); //-----check documentation needs fixing
$(".wind").text("Wind Speed: " + response.wind.speed);
$(".tempC").text("Temperature: " + response.main.temp);
$(".humidity").text("Humidity: " + response.main.humidity);

// Convert the temp to Celsius
var tempC = response.main.temp - 273.15;

// add temp content to html
// $(".temp").text("Temperature (K) " + response.main.temp);
$(".tempC").text("Temperature (C) " + tempC.toFixed(2)); //fixed temp to two decimal places
})
// console log the data as well as display on html page
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



// render button to display weather data
function renderButtons() {

    $("#search-button").empty();

    // loop through items in city array

    for (var i = 0; i < cities.length; i++) {

    // creates a button for each item in the array

    var a = $("<button>");
    
    a.addClass("city");

    a.attr("data-name", cities[i]);

    a.text(cities[i]);

    $("#search-button").append(a);
    }

}

// This function handles events where one button is clicked
$("#search-button").on("click", function(event) {
    // event.preventDefault() prevents the form from trying to submit itself.
    
    event.preventDefault();
  
    // This line will grab the text from the input box
    var city = $("#city-input").val().trim();
    // The movie from the textbox is then added to our array
    cities.push(city);
    console.log(cities);
  
    // calling renderButtons which handles the processing of our movie array
    renderButtons();
  });
  
//   $(document).on("click", ".city", displayCityInfo);
  // Calling the renderButtons function at least once to display the initial list of movies
  renderButtons();

// save data to local storage
for(var i = 0; i < cities.length; i++){
localStorage.setItem("#cities-view");
localStorage.getItem("#cities-view");
console.log(note);

}
