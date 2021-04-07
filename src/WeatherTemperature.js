import React, {useState} from "react";

export default function WeatherTemperature(props){
    const [unit, setUnit] = useState("celsius");

    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }

   
    if (unit === "celsius"){
        return(
            <div className="WeatherTemperature">
                <span className="temperature text-light">{Math.round(props.celsius)}</span>
                <span className="unit-type celsius">°C</span>
                <span className="line text-light"> | </span>
                <a href="/" className="unit-type" onClick={showFahrenheit}>°F</a>
            
             </div>    
        );        
        } else{
            let fahrenheit = (props.celsius * 9) / 5 + 32;
            return (
                <div className="WeatherTemperature">
                    <span className="temperature text-light">{Math.round(fahrenheit)}</span>
                    <a href="/" className="unit-type celsius" onClick={showCelsius}>°C</a>
                    <span className="line text-light"> | </span>
                    <span className="unit-type" >°F</span>  
            </div> 
            );
                  
    }
      
}