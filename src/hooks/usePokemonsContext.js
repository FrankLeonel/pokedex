import { PokemonsContextProvider } from "contexts/PokemonsContext";
import { useContext } from "react";

const usePokemonsContext = () => {
  const context = useContext(PokemonsContextProvider);

  return context;
};

export default usePokemonsContext;
