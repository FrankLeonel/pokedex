import { useThemeContext } from "hooks/useThemeContext";
import { createContext } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "themes/theme";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const { theme, setTheme } = useThemeContext();

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
