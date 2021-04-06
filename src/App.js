import React from "react";
import Form from "./Form";
import Weather from "./Weather";
import HourlyForecast from "./HourlyForecast";
import Footer from "./Footer";



import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <Form />
          <Weather />
          <hr />
          <HourlyForecast />
          <hr />
        </div>
      </div>
      <Footer />
    </div>
  );
}
