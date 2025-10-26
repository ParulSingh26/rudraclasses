import React, { useState } from 'react'
import themeContext from './themeContext'
import { useEffect } from 'react';

function ThemeState({children}) {
    const [theme, setTheme] = useState("light");

    const lightMode = ()=>{
        setTheme("light");
    }

    const darkMode = ()=>{
        setTheme("dark");
    }

      // 🧠 When theme changes, apply class to <html>
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

  return (
    <themeContext.Provider value = {{theme, lightMode, darkMode}}>
        {children}
    </themeContext.Provider>
  )
}

export default ThemeState;