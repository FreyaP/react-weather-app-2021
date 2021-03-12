//Use this file as template for other Context Providers
import React, { useEffect, useState } from 'react';

// Vijay's Weatherbit.io API key -
const Weatherbit_API_Key = "e5a5c070f2404fc8abeaf5656695ca79";

//Create the context
export const DailyContext = React.createContext()


//Provider for context to all children
export function DailyProvider({ children }) {
    const [dailyData, setDailyData] = useState({})
    const [dailyLoaded, setDailyLoaded] = useState(false)
    
    useEffect(() => {
        const success = async (pos) => {
            let lat = pos.coords.latitude;
            let lon = pos.coords.longitude;
            let apiKey = Weatherbit_API_Key;
            let url = `https://api.weatherbit.io/v2.0/forecast/daily?days=7&lat=${lat}&lon=${lon}&key=${apiKey}`;
            
            await fetch(url)
                .then((res) => res.json())
                .then((json) => {
                    setDailyData(json);
                    setDailyLoaded(true);
                    
                });
        };
        const error = async (err) => {
            window.alert(`Uh oh error${err.code}: ${err.message}`);
        };

        "geolocation" in navigator 
            ? navigator.geolocation.getCurrentPosition(success, error)
            : window.alert(`Geolocation not supported`);
    },[]);
//console.log(dailyData);
console.log("Daily data loaded is...", dailyLoaded);
    //Wrap theme providers around the children and set the values to send
    //Send muliple values in object
    return (
        <DailyContext.Provider value={{dailyData, dailyLoaded}}>
                {children}
        </DailyContext.Provider>
    )
}