# <weather Forecast App>

## Description

The weather app I was asked to design required using asyncoronised data to obtain the information from a third party website. In this task the requirements were as follows:

We were asked produce a 5 day forecast using the open weather map url : https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

User Story
To produce a weather outlook for multiple cities to help plan a trip using the data from the app.

Task 1: The app needs to be able to show the following data to help plan a trip:

City Name
Current Date
An icon representing different weather conditions
The temperature of the city, humidity and windspeed.

Task 2: The user would like to plan their trip accordingly so a five day forecast would help them to plan effectively for weather conditions.

My five day forecast needs to display the following information:

The date
weather icons
Temperature 
Humidity

Task 3: This needs to be interactive so that when the user clicks on a button and selects a city they are presented with future conditions for that city.


Additional features: As well as functionality the UI needs to be polished and have local storage.




Pseudocode
add current date from moments.js
Select and find apikey data from task 1

create a button that will search for a city using the api key and return the weather data for the city

Create a link from the button that will display a 5 day weather forecast for the selected city

use JSON stringify to parse the data

add set local storage
add get local storage

Make the website look good and functional



Achievements

I was able to request an api key for the open weather app and reseach information for 5 different cities to obtain The city, the temperature of the city, humidity and windspeed.

I went to the last piece of code I created and checked out how I applied a date using the moment function.

I managed to link the london data to the input form and append the city data for london to the html page.

However after trying to get data buttons to appear when  a city was entered and a button was pressed this did not work effectively and stopped my original code from working as intended.

I used ajax method GET to grab the data.

I was able to find out the latitude and logitude for five cities using the query handler.

Issues

I struggled to find out how to create a code that would pull data for any city. At first I decided to set my data of cities in an array and try to link the data to a method this however was unsuccessful, 
 but did find a weather app tutorial on you tube that showed a variable being set called newName that passed through a blank string in the code and then add the variable to the api url to pull any requested city. 

 I have not been able to add the icon yet I need to work out how to display as an image.

I have been struggling to store data to local storage.



Improvements

If given more time I would spend more time appending a five day weather forecast, tidy up the UI so it looks aesthetically pleasing. Add bootstrap card holders for the five day forecast. Look up and test local storage.

I did have issues with my css and was unable to resolve this despite making several searches for MIME errors and changing the link in the HTML stylesheet.

I would have fixed and changed the icon and set it to an image to display the weather condition icon.



 
   


## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

My code does not currently need an install and can be viewed directly through the URL.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative file path, add it to your README using the following syntax:





## Credits

There were no collaborators in this task.

I did very little research online and stuck mainly to the bootcamp tutorials and previous student tasks as I felt that they had most of the knowledge I needed. I often find that looking through youtube videos leave me overwhelmed and although they give a good insight and are good to watch they can confuse me and take me off track. 

I am trying hard to look at the code that I have worked with in the past to help build my knowledge of JavaScript as this is an area that I struggle with most.

All videos were found in the bootcamp that I watched on zoom for week 8.

I went onto the following websites:


I watched this website by Ranjan for inspiration on how to create a 5 day forecast that pulls in data for any city.

https://www.google.com/search?q=how+to+create+a+5+day+weather+forecast+using+open+weather+map&rlz=1C1SQJL_enGB1032GB1032&sxsrf=AJOqlzUntv5FVVqC1EJX0DbMZHItfPL9Gg:1675623592084&source=lnms&tbm=vid&sa=X&ved=2ahUKEwjw4e6niP_8AhXAQUEAHfUmC7kQ_AUoAnoECAEQBA&biw=1920&bih=961&dpr=1#fpstate=ive&vld=cid:523d318c,vid:QEu8_5bYm-w


For 5 day forecast data
https://openweathermap.org/forecast5#5days

For London Data
https://openweathermap.org/api/geocoding-api

To help me work out how to apply jquery to my code
https://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings-settings







## License

I have chosen a MIT license for this project
---

## Badges

I  have 2 git hub badge acheivements pullshark x2 and YOLO

## Features

No additional features added as main focus was working on a solution

## How to Contribute

N/A

## Tests

I used console.log(response) to check that the data was working for the city, windspeed, icons, humidity and temperature.

I have also ran through the moment code and refreshed to check that the date is working correctly.

I have checked the data in the consolelog and in the network area on the dev tools.



