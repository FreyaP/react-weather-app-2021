import React, { useEffect, useState } from 'react';


export const DateContext = React.createContext()


export function DateProvider({ children }) {
    const [todayDate, setTodayDate] = useState("");
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const today = new Date();
    let dayIndex = today.getDay();
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];  
        useEffect(() => {
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
        ];
        
        let year = today.getFullYear();
        let monthIndex = today.getMonth();
        let date = today.getDate();

        setDay(days[dayIndex]);
        setMonth(months[monthIndex]);
        setTodayDate(`${date} ${month}, ${year}`)
    });
    
    

    //Wrap theme providers around the children and set the values to send
    //Send muliple values in object
    return (
        
        <DateContext.Provider value={{todayDate, day, days, dayIndex }}>
            {children}
        </DateContext.Provider>
        
    )
    }