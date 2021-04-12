import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastHours (props){
    function temperature (){
        let temperature = Math.round(props.data.temp);
        return `${temperature}°`;
    }

    function hours (){
        let date = new Date(props.data.dt * 1000);
        let hours = date.getHours();

        return `${hours}:00`;

    }


    return (
        <div>
            <p className="text-center text-light hours">{hours()}</p>
            <WeatherIcon code={props.data.weather[0].icon} size={50}/>
            <p className="text-center text-light hourly-temp temp">{temperature()}</p>
        </div>
        
    );

}