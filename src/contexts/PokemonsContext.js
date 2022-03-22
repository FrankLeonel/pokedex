import React, { createContext, useEffect, useState } from "react";

const PokemonsContext = createContext();

export const PokemonsContextProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {}, []);

  const addPokemon = (pokemon) => {
    const verifyPokemon = pokemons.find((item) => item.name === pokemon.name);
    if (!verifyPokemon) setPokemons([...pokemons, pokemon]);
  };

  const removePokemon = (pokemon) => {
    const pokemonsFilter = pokemons.filter(
      (item) => item.name !== pokemon.name
    );
    setPokemons(pokemonsFilter);
  };

  return (
    <PokemonsContext.Provider value={{ pokemons, addPokemon, removePokemon }}>
      {children}
    </PokemonsContext.Provider>
  );
};
