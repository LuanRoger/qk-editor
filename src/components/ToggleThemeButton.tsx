import React, { useContext, useEffect, useState, createContext } from "react";
import { Button } from "./ui/button";
import { Moon } from "lucide-react";
import { getCurrentTheme } from "../lib/theme_utils";

export const ThemeContext = createContext("light");

export default function ToggleThemeButton() {
  const [theme, setTheme] = useState("dark");
  useEffect(loadTheme, []);

  function loadTheme() {
    const currentTheme = getCurrentTheme();

    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }

  function toggleTheme() {
    const currentTheme = getCurrentTheme();

    if (currentTheme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
    console.log(theme);
  }

  return (
    <ThemeContext.Provider value={theme}>
      <Button variant="ghost" size="icon" onClick={toggleTheme}>
        <Moon size={16} />
      </Button>
    </ThemeContext.Provider>
  );
}
