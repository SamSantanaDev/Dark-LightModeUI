"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  }

  return(
    <div className="flex justify-center items-center m-2">
      The current theme is: {theme}
      <button className="m-2" onClick={() => handleThemeChange('light')}>Light Mode</button>
      <button className="m-2" onClick={() => handleThemeChange('dark')}>Dark Mode</button>
    </div>
  );
};

export default ThemeSwitcher;
