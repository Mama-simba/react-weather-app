import React, { useState} from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response){
    console.log(response.data);
    setReady(true);
    setWeatherData({
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      tempMax: response.data.main.temp_max,
      tempMin: response.data.main.temp_min,
      date: new Date(response.data.dt * 1000),  
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        
    });
  }


  if(ready){
    return (
      <div className="MainDetails">
        <h1 className="city text-secondary text-center text-light">{weatherData.city}</h1>
        <p className="text-light text-center mb-0">
          <FormattedDate date={weatherData.date} />
        </p>

      <div className="main-weather d-flex justify-content-center">
        <div className="left-box text-center">
          <img
            className="icon-today-weather"
            id="main-icon"
            src={weatherData.icon}
            alt={weatherData.description}
          />
          <p id="weather-description" className="text-light text-capitalize">{weatherData.description}</p>
        </div>
        <div className="right-box text-center">
          <span className="temperature text-light" id="temp">{Math.round(weatherData.temperature)}</span>
          <a href="/" className="unit-type celsius" id="celsius">
             °C
          </a>
          <span className="line text-light"> | </span>
          <a href="/" className="unit-type" id="fahrenheit">
            °F
          </a>
          <div className="max-min-temp">
            <i className="fas fa-thermometer-three-quarters"></i>
            <span className="max text-light" id="max-temp"></span>
            <span className="text-light"> {Math.round(weatherData.tempMax)}°C </span>
            <i className="fas fa-thermometer-quarter"></i>
            <span className="min text-light" id="min-temp"></span>
            <span className="text-light"> {Math.round(weatherData.tempMin)}°C </span>
          </div>
        </div>
      </div>

      <ul className="text-center mb-0">
        <li className="text-light" id="wind">
          Wind: {weatherData.wind}km/h
        </li>
        <li className="text-light" id="humidity">
          Humidity: {weatherData.humidity}%
        </li>
        <li className="text-light" id="pressure">
          Pressure: {weatherData.pressure}%
        </li>
      </ul>
    </div>
    );
  } else {
      const apiKey = "10e6e87cefcedb53ba160de849dd0cf8";
      let city = "London";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);

      return "Loading..."
  }
  
}

