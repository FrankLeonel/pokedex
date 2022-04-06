import Content from "components/Content";
import { usePokemon } from "contexts/PokemonContext";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./Details.style";

const Details = () => {
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

  const getPokemonWeaknessesAndResistances = useCallback(async () => {
    if (pokemon) {
      const pokemonWeaknessesAndResistances = await getWeaknessesAndResistances(
        pokemon.types
      );

      setPokemonWeaknesses(pokemonWeaknessesAndResistances.weaknesses);
      setPokemonResistances(pokemonWeaknessesAndResistances.resistances);
    }
  }, [pokemon, getWeaknessesAndResistances]);

  useEffect(() => {
    setPokemon(null);
    window.scrollTo(0, 0);
    handleGetPokemon();
  }, [handleGetPokemon]);

  useEffect(() => {
    getPokemonWeaknessesAndResistances();
  }, [pokemon, getPokemonWeaknessesAndResistances]);

  return (
    <S.DetailsContainer>
      <Content>
        {!pokemon && (
          <S.LoadingContainer>
            <S.Loader />
          </S.LoadingContainer>
        )}
      </Content>
    </S.DetailsContainer>
  );
};

export default Details;
