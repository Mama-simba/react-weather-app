import React from "react";
import FormattedDate from "./FormattedDate";

import "./WeatherInfo.css"


export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
          
          <h1 className="city text-secondary text-center text-light">{props.data.city}</h1>
          <p className="text-light text-center mb-0">
          <FormattedDate date={props.data.date} />
          </p>

          <div className="main-weather d-flex justify-content-center">
            <div className="left-box text-center">
                <img className="icon-today-weather" id="main-icon" src={props.data.icon} alt={props.data.description}/>
                <p id="weather-description" className="text-light text-capitalize">{props.data.description}</p>
            </div>
            <div className="right-box text-center">
               <span className="temperature text-light" id="temp">{Math.round(props.data.temperature)}</span>
                <a href="/" className="unit-type celsius" id="celsius">°C</a>
                <span className="line text-light"> | </span>
                <a href="/" className="unit-type" id="fahrenheit">°F</a>
                <div className="max-min-temp">
                    <i className="fas fa-thermometer-three-quarters"></i>
                    <span className="max text-light" id="max-temp"></span>
                    <span className="text-light"> {Math.round(props.data.tempMax)}°C </span>
                    <i className="fas fa-thermometer-quarter"></i>
                    <span className="min text-light" id="min-temp"></span>
                    <span className="text-light"> {Math.round(props.data.tempMin)}°C </span>
                </div>
                       
            </div>
                    
          </div>

          <ul className="text-center mb-0 px-0">
            <li className="text-light" id="wind">
            Wind: {Math.round(props.data.wind)}km/h
            </li>
            <li className="text-light" id="humidity">
            Humidity: {props.data.humidity}%
            </li>
            <li className="text-light" id="pressure">
            Pressure: {props.data.pressure}hPa
            </li>
          </ul>
         
      
    </div>

    );
}