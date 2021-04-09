import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";



import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <Weather defaultCity="New York"/>
        
        </div>
      </div>
      <Footer />
    </div>
  );
}
