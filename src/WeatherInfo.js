import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
                <WeatherIcon code={props.data.icon} size={64} className="icon-today-weather"/>
                <p className="text-light text-capitalize weather-description">{props.data.description}</p>
            </div>
            
            <div className="right-box text-center">
            <WeatherTemperature celsius={props.data.temperature}/>
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