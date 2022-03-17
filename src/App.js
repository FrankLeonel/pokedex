import { ThemeContextProvider } from "contexts/ThemeContext";
import AppRoutes from "routes/AppRoutes";
import { GlobalStyles } from "styles/GlobalStyles";

function App() {
  return (
    <ThemeContextProvider>
      <AppRoutes />
      <GlobalStyles />
    </ThemeContextProvider>
  );
}

export default App;
