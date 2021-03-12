//Use this file as template for other Context Providers
import React, { useContext, useState } from 'react';
import { Moon, Sun } from 'react-feather';

//Create the context
const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()


//Custom hooks to access theme context and update theme
export function useTheme() {
    return useContext(ThemeContext)
}
export function useThemeUpdate() {
return useContext(ThemeUpdateContext)
}


//Provider for context to all children
export function ThemeProvider({ children }) {
    //This state gets set as ThemeContext.Provider below
    
    
    const [darkTheme, setDarkTheme] = useState(true)
    const [themeName, setThemeName] = useState(true)

    
    //This toggle function gets set as value for ThemeUpdateContext.Provider
    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
        setThemeName(prevThemeName => !prevThemeName);
       // setThemeName(themeName === <Moon/> ? <Sun/> : <Moon/>);
    }

    //Wrap theme providers around the children and set the values to send
    //Send muliple values in object
    return (
        <ThemeContext.Provider value={{darkTheme, themeName}}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
             </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}