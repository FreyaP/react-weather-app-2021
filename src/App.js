import React from "react";
import './App.css';
import LocationSearch from "./LocationSearch";
import { ThemeProvider } from './context/ThemeContext';
import { DateProvider } from "./context/DateContext";


//Import the Providers above and wrap around the components below

export default function App() {
 

 
  return (
    <DateProvider>
    <ThemeProvider>
            <div className='app-container'>
            <LocationSearch/>
            </div>
    </ThemeProvider>
    </DateProvider>
  );
}