import React, { useState} from "react";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import axios from "axios";

import "./Weather.css";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  
  
  //Geolocation button
  function currentLocation(response){
    let latitude = response.coords.latitude;
    let longitude = response.coords.longitude;
    const apiKey = "c16d2b9d485ee204702db359b60158f6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getLocation(event){
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(currentLocation);
  }


  function handleResponse(response){
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      tempMax: response.data.main.temp_max,
      tempMin: response.data.main.temp_min,
      date: new Date(response.data.dt * 1000),  
      icon: response.data.weather[0].icon
    });
  }

  function search(){
    const apiKey = "c16d2b9d485ee204702db359b60158f6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function handleCitySearch(event){
    setCity(event.target.value);
  }


  if(weatherData.ready){
    return (
        <div className="Weather row">
          <form onSubmit={handleSubmit} className="mt-4 mb-3">
            <div className="input-group">
              <input onChange={handleCitySearch} type="text" id="city-input" className="form-control" placeholder="Enter your city"/>
              <button className="btn btn-outline-secondary search-button" type="button"><i className="fas fa-search-location"></i></button>
              <button onClick={getLocation} className="btn btn-outline-secondary location-button" type="button">My location</button>
           </div>
          </form>
          <div className="main-details">
            <WeatherInfo data={weatherData}/>
            <hr />
            <Forecast coordinates={weatherData.coordinates} />
            <hr />
          </div>
          
        </div>  
        
    );

  } else {
    search();
    return "Loading..."
  }
  
}

