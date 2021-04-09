import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);


    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }

   

    if (loaded) {
        return (
            <div className="Forecast">
                <div className="row">
                    <div className="col col-lg-2 col-md-2 col-sm-6 hour-box">
                        <WeatherForecastDay data={forecast[0]} />
                    </div>
                </div>
            </div>
        );
 
    } else {
        let apiKey = "c16d2b9d485ee204702db359b60158f6";
        let longitude = props.coordinates.lon;
        let latitude= props.coordinates.lat;
        let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return null;
        }

}