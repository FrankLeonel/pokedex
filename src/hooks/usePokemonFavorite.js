import { useEffect, useState } from "react";

export const usePokemonFavorite = () => {
  const [pokemonsFavorite, setPokemonsFavorite] = useState(() => {
    const favorites = JSON.parse(
      localStorage.getItem("PokemonsFavorite") || "[]"
    );

    return favorites;
  });

  useEffect(() => {
    localStorage.setItem("PokemonsFavorite", JSON.stringify(pokemonsFavorite));
  }, [pokemonsFavorite]);

  return { pokemonsFavorite, setPokemonsFavorite };
};
