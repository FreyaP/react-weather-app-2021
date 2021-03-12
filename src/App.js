import React, { useContext } from "react";
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import { LoadingContext } from './context/LoadingContext';
import CurrentWeather from './CurrentWeather';
import { DateProvider } from "./context/DateContext";
import { DailyProvider } from "./context/DailyContext";
import DailyWeather from "./DailyWeather";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


//Import the Providers above and wrap around the components below

//

export default function App() {
  const { loaded } = useContext(LoadingContext);

  if(!loaded) {
    return (
      <div className='app'>
        <Loader 
        type="Plane"
        color="#324185"
        secondaryColor="#3183A8"
        height={100}
        width={100}
        timeout={5000}
        />
      </div>
    );
  } else {
  return (
    <div className="app">
      
        <DateProvider>
        <ThemeProvider>
          <DailyProvider>
            <div className='app-container'>
            <CurrentWeather />
            <DailyWeather />
            </div>
          </DailyProvider>
        </ThemeProvider>
        </DateProvider>
      
    </div>
  );
}}