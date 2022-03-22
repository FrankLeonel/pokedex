import { PokemonProvider } from "contexts/PokemonContext";
import { SearchContextProvider } from "contexts/SearchContext";
import { ThemeContextProvider } from "contexts/ThemeContext";
import AppRoutes from "routes/AppRoutes";
import { GlobalStyles } from "styles/GlobalStyles";

function App() {
  return (
    <ThemeContextProvider>
      <SearchContextProvider>
        <PokemonProvider>
          <AppRoutes />
          <GlobalStyles />
        </PokemonProvider>
      </SearchContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
