import React from 'react';
import './ForecastDay.css';


export default function ForecastDay(props) {

  let dayIndex = new Date().getDay();
  const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
  ];
  let daysAhead = props.index;
    let index;
    let indexTotal = daysAhead + dayIndex;
    if(indexTotal >= 7) {
        index = indexTotal - 7;
    } else {
    index = indexTotal;
    }
    
    
    let forecastDay = days[index];
    

    //Add box shadow theme for light/dark mode
    
    const icon = `https://www.weatherbit.io/static/img/icons/${props.dailyData.weather.icon}.png`;
    let description = props.dailyData.weather.description;
    
    const temp = () => {
        let tempLow = Math.round(props.dailyData.low_temp);
        let tempHigh = Math.round(props.dailyData.high_temp);
        return `${tempLow} | ${tempHigh}`
    } 

    return (
        <div className='forecast-container'>
            <h3 className="daily-day">{forecastDay}</h3>
            <img className="weather-icon" src={icon} alt="Weather Icon"/>
            <span className='high-low-temp'>{temp()}</span>
            <span className='daily-description'>{description}</span>
            
        </div>
    )
}