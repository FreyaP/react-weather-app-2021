import React, { useContext } from 'react';
import { DailyContext } from './context/DailyContext';
import { useTheme } from './context/ThemeContext';
import ForecastDay from './ForecastDay';
import "./DailyWeather.css";


export default function DailyWeather() {
    const { dailyData, dailyLoaded } = useContext(DailyContext)
    const { darkTheme } = useTheme()
    const themeStyles = {
        backgroundImage: darkTheme ? "linear-gradient(to top, #30cfd0 0%, #330867 100%)" : "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
        color: darkTheme ? "#FFFFFF" : "#333",
        padding: "3rem 4rem",
        margin: "2rem 2rem"
    }
 
//<button className="theme-button" onClick={toggleTheme}>{themeName}</button>
   
if(dailyLoaded) {
return (
        <div className="daily-weather" style={themeStyles}>
            
            <div className="daily-container">
                <ForecastDay dailyData={dailyData.data[1]} index={1}/>
                <ForecastDay dailyData={dailyData.data[2]} index={2}/>
                <ForecastDay dailyData={dailyData.data[3]} index={3}/>
                <ForecastDay dailyData={dailyData.data[4]} index={4}/>
                <ForecastDay dailyData={dailyData.data[5]} index={5}/>
                <ForecastDay dailyData={dailyData.data[6]} index={6}/>
            </div> 
                
            </div>
    ) } else {
        return (
            <p>Error: Check HMR</p>
        );
    }
}