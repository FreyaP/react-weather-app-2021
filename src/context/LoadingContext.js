//Use this file as template for other Context Providers
import React, { useEffect, useState } from 'react';

// Vijay's Weatherbit.io API key -
const Weatherbit_API_Key = "e5a5c070f2404fc8abeaf5656695ca79";

//Create the context
export const LoadingContext = React.createContext()


//Provider for context to all children
export function LoadingProvider({ children }) {
    const [response, setResponse] = useState({})
    const [loaded, setLoaded] = useState(false)
    
    useEffect(() => {
        const success = async (pos) => {
            console.log(pos);
            let lat = pos.coords.latitude;
            let lon = pos.coords.longitude;
            let apiKey = Weatherbit_API_Key;
            let url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${apiKey}`;

            await fetch(url)
                .then((res) => res.json())
                .then((json) => {
                    setResponse(json);
                    setLoaded(true);
                });
        };
        const error = async (err) => {
            window.alert(`Uh oh error${err.code}: ${err.message}`);
        };

        "geolocation" in navigator 
            ? navigator.geolocation.getCurrentPosition(success, error)
            : window.alert(`Geolocation not supported`);
    }, []);



    
    //Wrap theme providers around the children and set the values to send
    //Send muliple values in object
    return (
        <LoadingContext.Provider value={{response, loaded}}>
                {children}
        </LoadingContext.Provider>
    )
}