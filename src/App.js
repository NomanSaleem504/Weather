import React, { useState } from 'react';
import './App.css';

const  App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const weatherCities = (e) => {
    e.preventDefault();
  
  const axios = require('axios');

// Make a request for a user with a given ID
axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'0c2b8fbfe03be04844ca0d643c797521'}`)
  .then(function (response) {
    // handle success
    console.log(response);
    setWeather({
      feel: response.data.main.feels_like,
      mx: response.data.main.temp_min,
      mn: response.data.main.temp_min,
      temp:((response.data.main.temp-273.15).toFixed(0))
    });
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

  
};
  
  return (
    <div className="main_div">
    <div className="center_div">
     <h2>Weather App</h2>
     <form onSubmit = {weatherCities}>
     <input type="text" value={city} onChange={(e)=>setCity(e.target.value)}/>
     
     <input  type="submit" value="Search"/>
     </form>
     <i class="fas fa-street-view"></i>
     <p>Location :{city}</p>
     <p>Feels Like : {weather.feel}</p>
     <br/>
     <h2>Temp : {weather.temp}</h2>
     <h2>Mininum Weather : {weather.mn}</h2>
     <p>Maximum Weather : {weather.mx}</p>
    
   <div className="wave-one"></div>
   <div className="wave-Two"></div>
   <div className="wave-Three"></div>
    </div>
    </div>
    
    
  )
};

export default App;
