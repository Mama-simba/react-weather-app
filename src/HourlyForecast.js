import "./HourlyForecast.css";

export default function HourlyForecast() {
  return (
    <div
      className="forecast d-flex justify-content-center flex-wrap p-2"
      id="forecast"
    >
      <div className="hour-box">
        <p className="text-center text-light">13:00</p>
        <img
          className="hour-weather-icon"
          src="https://cdn3.iconfinder.com/data/icons/tiny-weather-1/512/cloud-512.png"
          alt="Weather icon per hour"
        />
        <p className="text-center text-light">8°</p>
      </div>
      <div className="hour-box">
        <p className="text-center text-light">14:00</p>
        <img
          className="hour-weather-icon"
          src="https://cdn3.iconfinder.com/data/icons/tiny-weather-1/512/cloud-512.png"
          alt="Weather icon per hour"
        />
        <p className="text-center text-light">9°</p>
      </div>
      <div className="hour-box">
        <p className="text-center text-light">15:00</p>
        <img
          className="hour-weather-icon"
          src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-02-512.png"
          alt="Weather icon per hour"
        />
        <p className="text-center text-light">10°</p>
      </div>
      <div className="hour-box">
        <p className="text-center text-light">16:00</p>
        <img
          className="hour-weather-icon"
          src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-02-512.png"
          alt="Weather icon per hour"
        />
        <p className="text-center text-light">12°</p>
      </div>
      <div className="hour-box">
        <p className="text-center text-light">17:00</p>
        <img
          className="hour-weather-icon"
          src="https://cdn3.iconfinder.com/data/icons/tiny-weather-1/512/rain-cloud-512.png"
          alt="Weather icon per hour"
        />
        <p className="text-center text-light">10°</p>
      </div>
      <div className="hour-box">
        <p className="text-center text-light">18:00</p>
        <img
          className="hour-weather-icon"
          src="https://cdn3.iconfinder.com/data/icons/tiny-weather-1/512/rain-cloud-512.png"
          alt="Weather icon per hour"
        />
        <p className="text-center text-light">110°</p>
      </div>
    </div>
  );
}