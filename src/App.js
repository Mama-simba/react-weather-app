import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";



import "./App.css";

export default function App() {
  return (
    <div className="App">
      
      
      <div className="container">
        <div className="weather-app">
          <div className="background-container">
            <div className="sun"></div>
            <div className="bird"></div>
            <div className="bird2"></div>
            <div className="star n1"></div> 
            <div className="star n2"></div>
            <div className="star n3"></div>
          </div>
         <Weather defaultCity="New York"/>
        </div>
      </div>
      <Footer />
      
    </div>
  );
}
