import React, {useEffect, useState} from 'react'

export default function useDarkMode() {
    const [theme, setTheme] = useState("dark") //to use localStorage.theme

    const colorTheme = theme === "dark" ? "light" : "dark";

    useEffect(() => {
        if(typeof window === "undefined" ) {
            localStorage.setItem(key, value)
        }

        const root = window.document.documentElement;

        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme, colorTheme]);

    return [colorTheme, setTheme];
}
