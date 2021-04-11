import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay (props){
    function maxTemperature (){
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }
    function minTemperature (){
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }

    function day (){
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];

    }


    return (
        <div>
            <p className="text-center text-light date">{day()}</p>
            <WeatherIcon code={props.data.weather[0].icon} size={50}/>
            <p className="text-center text-light daily-temp maxTemp">{maxTemperature()}<span className="minTemp">{minTemperature()}</span></p>
        </div>
        
    );

}