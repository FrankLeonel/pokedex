import { useEffect, useState } from "react";

const useFavorite = () => {
  const [theme, setTheme] = useState(() => {
    const value = localStorage.getItem("theme");

    return value === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
};

export default useFavorite;
