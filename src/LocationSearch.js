import React, { useEffect, useState } from 'react';
import CurrentWeather from './CurrentWeather';
import DailyWeather from './DailyWeather';
import './LocationSearch.css'

const Weatherbit_API_Key = "e5a5c070f2404fc8abeaf5656695ca79";


export default function LocationSearch() {
const [response, setResponse] = useState({});
const [isSearching, setIsSearching] = useState(true);
const [searchCity, setSearchCity] = useState('');
const [location, setLocation] = useState('')

//useEffect runs when the location state gets updated
useEffect(() => {

//function for searched city weather
const search = async () => {
    let apiKey = Weatherbit_API_Key;
    let url = (`https://api.weatherbit.io/v2.0/forecast/daily?days=7&city=${searchCity}&key=${apiKey}`);

await fetch(url)
    .then((res) => res.json())
    .then((json) => {
        setResponse(json);
        setIsSearching(false);
    });
};
//function for current location weather 
const success = async (pos) => {
    let lat = pos.coords.latitude;
    let lon = pos.coords.longitude;
    let apiKey = Weatherbit_API_Key;
    let url = (`https://api.weatherbit.io/v2.0/forecast/daily?days=7&lat=${lat}&lon=${lon}&key=${apiKey}`);

    await fetch(url)
        .then((res) => res.json())
        .then((json) => {
            setResponse(json);
            setIsSearching(false);
        });
};
const notFound = async (err) => {
    window.alert(`Uh oh error${err.code}: ${err.message}`);
}; 
if(location === 'current') {
    navigator.geolocation.getCurrentPosition(success, notFound)
} else if (location === 'search')  {
    search();
} else {
    console.log('Location undefined')
}
//clean up function 
return (
    setLocation(undefined)
)
}, [location, searchCity])



const handleSubmit=(e) => {
    e.preventDefault();
    setLocation('search');
}
const searchView = (
    <div className="search-container">
        <h1>What's the Weather...</h1>
        <button className="my-location" onClick={() => setLocation('current')}>My Location</button>
        <form className='search-view' onSubmit={handleSubmit}>
            <input 
            className="search-location" 
            type="search" 
            placeholder="Search Location" 
            autoFocus='on' 
            onChange={e => setSearchCity(e.target.value)}/>
        </form>
    </div>
)
const toggleSearchStatus = () => {
    setIsSearching(prevIsSearching => !prevIsSearching);
}

const weatherView = (
<div className='weather-container'>
    <CurrentWeather response={response} toggleSearchStatus={toggleSearchStatus}/>
    <DailyWeather response={response}/>
</div>
)


    return(
                <div>{isSearching ? searchView : weatherView}</div> 
    )
}