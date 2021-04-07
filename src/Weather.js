import React, { useState} from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

import "./Weather.css";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  

  function handleResponse(response){
    setWeatherData({
      ready: true,
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
    const apiKey = "10e6e87cefcedb53ba160de849dd0cf8";
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
            <div class="input-group">
              <input onChange={handleCitySearch} type="text" id="city-input" className="form-control" placeholder="Enter your city"/>
              <button className="btn btn-outline-secondary search-button" type="button"><i className="fas fa-search-location"></i></button>
              <button className="btn btn-outline-secondary location-button" type="button">My location</button>
           </div>
          </form>
          <div className="main-details">
            <WeatherInfo data={weatherData}/>
          </div>
          
        </div>  
        
    );

  } else {
    search();
    return "Loading..."
  }
  
}

