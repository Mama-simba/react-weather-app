import "./MainWeatherInfo.css";

export default function MainWeatherInfo() {
  return (
    <div className="row">
      <h1 className="city text-secondary text-center text-light">Berlin</h1>
      <p className="text-light text-center mb-0" id="date">
        Wed, 17 February, 15:30
      </p>

      <div className="main-weather d-flex justify-content-center">
        <div className="left-box text-center">
          <img
            className="icon-today-weather"
            id="main-icon"
            src="https://cdn3.iconfinder.com/data/icons/tiny-weather-1/512/cloud-512.png"
            alt="Current weather icon"
          />
          <p id="weather-description" className="text-light">
            Cloudy
          </p>
        </div>
        <div className="right-box text-center">
          <span className="temperature text-light" id="temp">
            8
          </span>
          <a href="/" className="unit-type" id="celsius">
            °C
          </a>
          <a className="line text-light">|</a>
          <a href="/" className="unit-type" id="fahrenheit">
            °F
          </a>
          <div className="max-min-temp">
            <i className="fas fa-thermometer-three-quarters"></i>
            <span className="max text-light" id="max-temp"></span>
            <span className="text-light"> 12°C </span>
            <i className="fas fa-thermometer-quarter"></i>
            <span className="min text-light" id="min-temp"></span>
            <span className="text-light"> 6°C </span>
          </div>
        </div>
      </div>

      <ul className="text-center mb-0">
        <li className="text-light" id="wind">
          Wind: 10km/h
        </li>
        <li className="text-light" id="humidity">
          Humidity: 20%
        </li>
        <li className="text-light" id="pressure">
          Pressure: 10%
        </li>
      </ul>
    </div>
  );
}