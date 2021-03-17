import React from 'react';
import { useTheme } from './context/ThemeContext';
import ForecastDay from './ForecastDay';
import "./DailyWeather.css";


export default function DailyWeather(props) {
    const { darkTheme } = useTheme()
    const themeStyles = {
        backgroundImage: darkTheme ? "linear-gradient(to top, #30cfd0 0%, #330867 100%)" : "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
        color: darkTheme ? "#FFFFFF" : "#333",
        padding: "2rem 3rem",
        margin: "2rem 0rem"
    }
 
   
if(props.response !== undefined) {
return (
        <div className="daily-weather" style={themeStyles}>
            
            <div className="daily-container">
                <ForecastDay dailyData={props.response.data[1]} index={1}/>
                <ForecastDay dailyData={props.response.data[2]} index={2}/>
                <ForecastDay dailyData={props.response.data[3]} index={3}/>
                <ForecastDay dailyData={props.response.data[4]} index={4}/>
                <ForecastDay dailyData={props.response.data[5]} index={5}/>
                <ForecastDay dailyData={props.response.data[6]} index={6}/>
            </div> 
                
            </div>
    ) } else {
        return (
            <p>Loading</p>
        );
    }
}