import { endpoints } from "config/endpoints";
import useSearch from "hooks/useSearch";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { removeDuplicates } from "utils/removeDuplicates";

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const { search } = useSearch();
  const [loading, setLoading] = useState(!pokemonList.length);
  const [pokemonsFavorite, setPokemonsFavorite] = useState([]);

  const getPokemonsFavoriteLocal = useCallback(() => {
    setPokemonsFavorite([]);
    const favorites = JSON.parse(
      localStorage.getItem("PokemonsFavorite") || "[]"
    );
    setPokemonsFavorite(favorites);
  }, []);

  const savePokemonFavoriteLocal = useCallback(() => {
    localStorage.setItem("PokemonsFavorite", JSON.stringify(pokemonsFavorite));
  }, [pokemonsFavorite]);

  const addFavorite = useCallback(
    (pokemon) => {
      const verifyPokemon = pokemonsFavorite.find(
        (item) => item.name === pokemon.name
      );
      let array = pokemonsFavorite;

      if (!verifyPokemon) {
        array.push(pokemon);
        array.sort(function (a, b) {
          if (a.id < b.id) {
            return -1;
          } else {
            return true;
          }
        });
        setPokemonsFavorite([...array]);
      } else {
        let index = array.findIndex((item) => item.name === pokemon.name);
        console.log(index);
        array.splice(index, 1);

        setPokemonsFavorite([...array]);
      }

      savePokemonFavoriteLocal();
    },
    [pokemonsFavorite, savePokemonFavoriteLocal]
  );

  const getPokemon = useCallback(async (id) => {
    const { data: pokemonData } = await endpoints.getPokemon(id);
    const { data: speciesData } = await endpoints.getSpecies(
      pokemonData.species?.url.substring(26)
    );

    return {
      pokemonTarget: { ...pokemonData, isFavorite: false },
      pokemonSpecies: speciesData,
    };
  }, []);

  const getEvolutionChain = useCallback(async (pokemonDetails) => {
    const chainId = pokemonDetails.evolution_chain.url.slice(42, -1);
    const { data } = await endpoints.getEvolutionChain(chainId);

    return data;
  }, []);

  const getPokemonInterval = useCallback(
    async (startId, endId) => {
      for (let index = startId; index <= endId; index++) {
        const newPokemon = await getPokemon(index.toString());
        setPokemonList((oldPokemonList) => [
          ...oldPokemonList,
          newPokemon.pokemonTarget,
        ]);
      }
    },
    [getPokemon]
  );

  const getPokemonSearch = useCallback(async (searchPokemon) => {
    const pokemonInfos = [];

    for (let i = 0; i < searchPokemon.length && i <= 51; i++) {
      const { data } = await endpoints.getPokemonSearch(searchPokemon[i].name);
      pokemonInfos.push(data);
    }

    setPokemonList(pokemonInfos);
  }, []);

  const getContinueSearchList = useCallback(async () => {
    const pokemonInfos = [];

    const { data } = await endpoints.getContinueSearchList();
    const listPokemonNames = data.results;

    const searchList = listPokemonNames.filter((pokemon) => {
      return pokemon.name.includes(search.toLowerCase());
    });

    for (
      let i = pokemonList.length;
      i < searchList.length && pokemonInfos.length <= 51;
      i++
    ) {
      const { data } = await endpoints.getPokemonSearch(searchList[i].name);
      pokemonInfos.push(data);
    }

    setPokemonList((oldPokemonList) => [...oldPokemonList, ...pokemonInfos]);
  }, [search, pokemonList]);

  const getInitialPokemonList = useCallback(async () => {
    await getPokemonInterval(1, 52);
  }, [getPokemonInterval]);

  const getWeaknessesAndResistances = useCallback(async (types) => {
    const allWeaknesses = [];
    const allResistances = [];
    const allNoDamages = [];

    for (let i = 0; i < types.length; i++) {
      const { data } = await endpoints.getTypes(types[i].type.name);

      const typeDetails = data;

      allWeaknesses.push(
        ...typeDetails.damage_relations.double_damage_from.map(
          (doubleDamageType) => doubleDamageType.name
        )
      );

      allResistances.push(
        ...typeDetails.damage_relations.half_damage_from.map(
          (halfDamageType) => halfDamageType.name
        )
      );

      allNoDamages.push(
        ...typeDetails.damage_relations.no_damage_from.map(
          (noDamageType) => noDamageType.name
        )
      );
    }

    const weaknesses = removeDuplicates(
      allWeaknesses
        .filter((weakness) => !allResistances.includes(weakness))
        .filter((weakness) => !allNoDamages.includes(weakness))
    ).sort();

    const resistances = removeDuplicates(
      allResistances.filter((resistance) => !allWeaknesses.includes(resistance))
    ).sort();

    return { weaknesses, resistances };
  }, []);

  const getPokemonImage = useCallback((id) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }, []);

  const getIdVariantDefault = useCallback((species) => {
    const variantDefault = species.varieties.find(
      (variety) => variety.is_default
    );

    return variantDefault
      ? parseInt(
          variantDefault?.pokemon.url.substring(
            34,
            variantDefault?.pokemon.url.length - 1
          )
        )
      : 0;
  }, []);

  useEffect(() => {
    getInitialPokemonList();
  }, [getInitialPokemonList]);

  useEffect(() => {
    getPokemonsFavoriteLocal();
  }, [getPokemonsFavoriteLocal]);

  return (
    <PokemonContext.Provider
      value={{
        addFavorite,
        loading,
        setLoading,
        pokemonList,
        setPokemonList,
        getPokemon,
        pokemonsFavorite,
        getEvolutionChain,
        getPokemonInterval,
        getPokemonSearch,
        getContinueSearchList,
        getWeaknessesAndResistances,
        getPokemonImage,
        getIdVariantDefault,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

const usePokemon = () => {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error("usePokemon must be used within a PokemonProvider");
  }

  return context;
};

export { PokemonProvider, usePokemon };
