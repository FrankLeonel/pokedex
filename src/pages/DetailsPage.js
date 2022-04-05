import BackTop from "components/BackTop";
import Header from "components/Header";
import { usePokemon } from "contexts/PokemonContext";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const params = useParams();

  const {
    getPokemon,
    getWeaknessesAndResistances,
    getEvolutionChain,
    getIdVariantDefault,
  } = usePokemon();

  const [pokemon, setPokemon] = useState(null);
  const [pokemonSpecie, setPokemonSpecie] = useState(null);
  const [pokemonVarieties, setPokemonVarieties] = useState([]);
  const [pokemonWeaknesses, setPokemonWeaknesses] = useState([]);
  const [pokemonResistances, setPokemonResistances] = useState();
  const [idVariantyDefault, setIdVariantyDefault] = useState();
  const [pokemonEvolutionChain, setPokemonEvolutionChain] = useState(null);

  const handleGetPokemon = useCallback(async () => {
    const { pokemonTarget, pokemonSpecies } = await getPokemon(params.id);

    setPokemon(pokemonTarget);
    setPokemonSpecie(pokemonSpecies);
    setPokemonVarieties(pokemonSpecies.varieties);
    setIdVariantyDefault(getIdVariantDefault(pokemonSpecies));

    const evolutionChain = await getEvolutionChain(pokemonSpecies);
    setPokemonEvolutionChain(evolutionChain);
  }, [params, getEvolutionChain, getPokemon, getIdVariantDefault]);

  useEffect(() => {
    setPokemon(null);
    window.scrollTo(0, 0);
    handleGetPokemon();
  }, [handleGetPokemon]);

  return (
    <>
      <Header />
      <h1>Details Page</h1>

      <BackTop />
    </>
  );
};

export default DetailsPage;
