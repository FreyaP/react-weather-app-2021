import React, { useContext } from 'react';
import './Weather.css';
import { DateContext } from './context/DateContext';
import { Umbrella, Wind } from 'react-feather';

export default function Weather({city, weather}) {
const { todayDate, day } = useContext(DateContext)
    if (weather.weather === undefined) {
        return null;
    } else {
        const icon = ` https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`;
    
    return (
        <div className="container">
            <div className="date">
                <h3 className="day">{day}</h3>
                {todayDate}
            </div>
            <div className="location">
                {city.city_name}, {city.country_code}
            </div>
            <div className="weather-info">
                <img className="weather-icon" src={icon} alt="Weather Icon" />
                <span className="temp">{Math.floor(weather.temp)}°C</span>
                <p className="description">{weather.weather.description}</p>
            </div>
            <div className="more-details">
            <p className="feels-like">Feels like {Math.floor(weather.feels_like)}°C</p>
            <p className="vis"><Wind /> {weather.wind_spd} km</p>
            <p className="precip"><Umbrella /> {weather.precip}mm</p>
            </div>

        </div>
    );
    
    }
};