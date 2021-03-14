import { LoadingContext } from './context/LoadingContext';
import React, { useContext, useState } from 'react';

export default function SearchCity() {
const { updateResponse } = useContext(LoadingContext);
const Weatherbit_API_Key = "e5a5c070f2404fc8abeaf5656695ca79";


let [searchCity, setSearchCity] = useState("");
let [newData, setNewData] = useState({});



const handleSubmit = (e) => {
    e.preventDefault();
    searchCity && updateCity(searchCity);  
    setSearchCity("")
}
async function updateCity() {
    let apiKey = Weatherbit_API_Key;
    let searchUrl = (`https://api.weatherbit.io/v2.0/current?city=${searchCity}&key=${apiKey}`)
    
    await fetch(searchUrl)
    .then((res) => res.json())
    .then((json) => {
        setNewData(json);

    });
    //search problem exists here and moving state up to loading context
    await updateResponse(newData);
}

return (

 <form onSubmit={handleSubmit}>
 <input
 type="search"
 placeholder="Search Location"
 autoFocus="on"
 onChange={e => setSearchCity(e.target.value)}
  />
</form>

)}