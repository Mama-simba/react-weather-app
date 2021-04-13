import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import WeatherForecastHours from "./WeatherForecastHours";



export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    let [hourly, setHourly] = useState(null);
    


    function handleResponse(response){
        setForecast(response.data);
        setHourly(response.data.hourly);
        setLoaded(true);
    }

   

    if (loaded && props.coordinates.lat === forecast.lat && props.coordinates.lon === forecast.lon) {
        return (
            <div className="Forecast">
                <div className="row hourly-forecast">
                    <div className="col col-lg-2 col-md-2 col-sm-6 hour-box">
                        <WeatherForecastHours data={hourly[0]} />
                    </div>
                    <div className="col col-lg-2 col-md-2 col-sm-6 hour-box">
                        <WeatherForecastHours data={hourly[1]} />
                    </div>
                    <div className="col col-lg-2 col-md-2 col-sm-6 hour-box">
                        <WeatherForecastHours data={hourly[2]} />
                    </div>
                    <div className="col col-lg-2 col-md-2 col-sm-6 hour-box">
                        <WeatherForecastHours data={hourly[3]} />
                    </div>
                    <div className="col col-lg-2 col-md-2 col-sm-6 hour-box">
                        <WeatherForecastHours data={hourly[4]} />
                    </div>
                    <div className="col col-lg-2 col-md-2 col-sm-6 hour-box">
                        <WeatherForecastHours data={hourly[5]} />
                    </div>
                </div>
                
                <hr />

                <div className="row daily-forecast">
                    <div className="col col-lg-2 col-md-2 col-sm-6 hour-box">
                        <WeatherForecastDay data={forecast.daily[0]} />
                    </div>
                    <div className="col col-lg-2 col-md-2 col-sm-6 hour-box">
                        <WeatherForecastDay data={forecast.daily[1]} />
                    </div>
                    <div className="col col-lg-2 col-md-2 col-sm-6 hour-box">
                        <WeatherForecastDay data={forecast.daily[2]} />
                    </div>
                    <div className="col col-lg-2 col-md-2 col-sm-6 hour-box">
                        <WeatherForecastDay data={forecast.daily[3]} />
                    </div>
                    <div className="col col-lg-2 col-md-2 col-sm-6 hour-box">
                        <WeatherForecastDay data={forecast.daily[4]} />
                    </div>
                    <div className="col col-lg-2 col-md-2 col-sm-6 hour-box">
                        <WeatherForecastDay data={forecast.daily[5]} />
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