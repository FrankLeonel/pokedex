import { useEffect, useState } from "react";

export const useThemeContext = () => {
  const [theme, setTheme] = useState(() => {
    const value = localStorage.getItem("theme");

    return value === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
};
