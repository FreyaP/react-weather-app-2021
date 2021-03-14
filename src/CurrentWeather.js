import React, { useContext, useEffect, useState } from 'react';
import { Moon, Sun } from 'react-feather';
import { LoadingContext } from './context/LoadingContext';
import { useTheme, useThemeUpdate } from './context/ThemeContext';
import './CurrentWeather.css';
//import SearchCity from './SearchCity'; 
//searching and loading data in SearchCity but not raising. Changing direction.
import Weather from './Weather'

//Import the (custom) hooks that you need above
//Define them in the function below

export default function CurrentWeather() {
    const { response, loaded } = useContext(LoadingContext)
    const { themeName, darkTheme } = useTheme()
    const toggleTheme = useThemeUpdate()
    
    const light = "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)";
    const themeStyles = {
        backgroundImage: darkTheme ? "linear-gradient(to top, #30cfd0 0%, #330867 100%)" : light,
        color: darkTheme ? "#FFFFFF" : "#333",
        padding: "3rem 5rem",
        margin: "2rem 0rem"
    }
    let themeIcon = themeName ? <Sun /> : <Moon />;
    let [city, setCity] = useState({});
    let [weather, setWeather] = useState({});
    

    useEffect(() => {
        if(!loaded || weather.weather !== undefined) {
            return null;
        } else {
            let {
                country_code,
                city_name,
                temp, //celsius
                app_temp, //feels like temp
                weather, //icon, code, description
                precip, //mm/hr
                wind_spd, //km
            } = response.data[0];

            setCity({city_name: city_name, country_code: country_code});
            setWeather({
                temp: temp,
                feels_like: app_temp,
                weather: weather,
                precip: precip,
                wind_spd: wind_spd
            });
        }}, [loaded, weather, response]);
        
       
            
    return (
        
            <div className="current-weather" style={themeStyles}>
            <button className="theme-button" onClick={toggleTheme}>{themeIcon}</button>
                
                <Weather city={city} weather={weather} />
            </div>
        
    )
}