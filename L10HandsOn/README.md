# Angular Final Project

Welcome to the Final Project for the Angular course. Great job making it this far! This final project requires an understanding of several topics you've learned throughout this course. It is designed to mimic requirements you'll encounter in your career, so it may be challenging and require several hours to complete. Don't forget, you can always review past lessons and search the internet for help. Good luck!

---

## Project Structure

Some of the structure has been provided for you; specifically, some models and services. You will need to create your own modules and components.

### WorldCities

The `WorldCitiesService` service has been provided for you. It contains JSON files with most of the world's countries, states/regions, and cities, as well as functions to access the data.

### GeoLocationService

The `GeoLocationService` is meant to acquire the geographic coordinates (latitude and longitude) of a specified city in the world. In order to implement that functionality, you will need to sign up for a free developer account at _MapQuest_ to use their `Geocoding API`.

[Signup for a free MapQuest Developer Account](https://developer.mapquest.com/plan_purchase/steps/business_edition/business_edition_free/register).

When you sign up, you should be provided an `API Key`. Once you have the key, replace the placeholder (_MAPQUEST_API_KEY_) at the top of the `geolocation.service.ts` file:

```js
// API Key - Change to your API_KEY
const GEO_API_KEY = "MAPQUEST_API_KEY";
```

You can [manage your MapQuest API keys on their site](https://developer.mapquest.com/user/me/apps).

You will need to add the necessary code to the `geolocation.service.ts` file to acquire data from MapQuests's API. However, a skeleton is provided, and there are comments to help you. Look back throughout the lessons if you need help. The other service &mdash; _WeatherService_ (below) &mdash; has been implemented for you. You can also refer to that source code for ideas or help.

To get details on how to use the API, go to [MapQuests's Geocoding API documentation](https://developer.mapquest.com/documentation/geocoding-api/address/get//).


### WeatherService

The `WeatherService` is meant to acquire weather data, both current and hourly, for specified geographic coordinates (latitude and longitude). This service has been implemented for you; however, you will need to sign up for a free account at _OpenWeatherMap_ to use their API.

[Signup for a free account at OpenWeatherMap](https://home.openweathermap.org/users/sign_up).

When you sign up, you should be provided an `API Key`. Once you have the key, replace the placeholder (_OPEN_WEATHER_MAP_API_KEY_) at the top of the `weather.service.ts` file:

```js
// API Key - Change to your API_KEY
const WEATHER_API_KEY = "OPEN_WEATHER_MAP_API_KEY";
```

You can [manage your OpenWeatherMap API keys on their site](https://home.openweathermap.org/api_keys).

---

## Requirements

### Step 1

You need a mechanism to select a city for which to request geographic coordinate and weather data using the APIs.

One common approach for acquiring the city is to use three selectors:

- The user must first specify a **country** before the state/region selector has any data.

- The user must then select a **state/region** of the selected country before the city selector has data.

- The user can then choose a **city** of the selected state/region.

Collecting input from the user to select a city should be on its own route. In other words, **one route** should be responsible for collecting input from the user, while the **other route** (or routes) should be used to display the weather of the selected city.

---

### Step 2

Create another route for the weather.

Display the selected city and state/region on this page. This is only meant to be temporary, but it will help you to ensure you're passing data around properly.

---

### Step 3

Now that you're able to select a city and pass it to the new route, you'll next need to get the city's geographic coordinates using the `MapQuest Geolocation API`.

As mentioned earlier, you will need to implement the functionality to get the location data via the API. A skeleton (`geolocation.service.ts`) has been created for you with comments to help.

Once you successfully obtain the city's coordinates, temporarily display the latitude and longitude values below the city on the page. This will help you verify that all is working properly.

---

### Step 4

Now that you're able to select a city and get its geographic coordinates via the _MapQuest Geolocation API_, you'll next need to get the weather data for the city using the `OpenWeatherMap API`.

The `WeatherService` has been implemented for you &mdash; you only need to replace the API Key and use the service. 

You are welcome to implement a single route (page) to display both the current and hourly weather data, or a route for each.

The API will return quite a bit of data, so you can print the response to the console to view it and determine how to access the data you need, as well as diagnose any errors.

---

### Step 5

Now that you're able to select a city and get its geographic coordinates and weather data, you'll need to present the data on the page. Display the weather data how you'd like.

**NOTE**: <em>OpenWeatherMap</em> also provides images that you can use on your page. You can learn how to use them on their <a target="_blank" href="https://openweathermap.org/weather-conditions">Weather Conditions documentation page</a>.
