import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'react-feather';

import { useTheme, useThemeUpdate } from './context/ThemeContext';
import './CurrentWeather.css';

//searching and loading data in SearchCity but not raising. Changing direction.
import Weather from './Weather'

//Import the (custom) hooks that you need above
//Define them in the function below

export default function CurrentWeather({ response, toggleSearchStatus }) {
    
    const { themeName, darkTheme } = useTheme()
    const toggleTheme = useThemeUpdate()
    
    const light = "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)";
    const themeStyles = {
        backgroundImage: darkTheme ? "linear-gradient(to top, #30cfd0 0%, #330867 100%)" : light,
        color: darkTheme ? "#FFFFFF" : "#333",
        padding: "2rem 5rem",
        margin: "2rem 0rem"
    }
    let themeIcon = themeName ? <Sun /> : <Moon />;
    let [city, setCity] = useState({});
    let [weather, setWeather] = useState({});
    

    useEffect(() => {
        if(weather.weather !== undefined) {
            return null;
        } else {
            let {
                temp, //celsius
                max_temp, //feels like temp
                min_temp,
                weather, //icon, code, description
                precip, //mm/hr
                wind_spd, //km
            } = response.data[0];

            setCity({city_name: response.city_name, country_code: response.country_code});
            setWeather({
                temp: temp,
                max_temp: max_temp,
                min_temp: min_temp,
                weather: weather,
                precip: precip,
                wind_spd: wind_spd
            });
        }}, [weather, response]);
        
   
            
    return (
        
            <div className="current-weather" style={themeStyles}>
                <div className='button-container'>
            <button className="theme-button" onClick={toggleTheme}>{themeIcon}</button>
            <button className="change-location" onClick={toggleSearchStatus}>Change Location</button>
            </div>  
                <Weather city={city} weather={weather} />
            </div>
        
    )
}