"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();


    useEffect(() => {
        setMounted(true);
    }, []);


    if (!mounted) {
        return null;
    }

    return (
        <button
            className={`w-fit  right-5 top-2 p-2 rounded-md hover:scale-125 active:scale-100 duration-200`}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
        </button>
    );
};