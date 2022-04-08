import BackTop from "components/BackTop";
import Content from "components/Content";
import PokemonVarieties from "components/PokemonVarieties";
import { usePokemon } from "contexts/PokemonContext";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./Details.style";
import HeaderDetail from "./HeaderDetail";

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
    <>
      {!pokemon && (
        <S.LoadingContainer>
          <S.Loader />
        </S.LoadingContainer>
      )}
      {pokemon && (
        <>
          <S.DetailsContainer>
            <HeaderDetail
              pokemon={pokemon}
              idVariantyDefault={idVariantyDefault}
            />
            <Content>
              <S.ContainerInfos>
                {pokemonVarieties.length > 1 && (
                  <PokemonVarieties
                    varieties={pokemonVarieties}
                    selected={pokemon.name}
                  />
                )}
                <div>
                  <div>About</div>
                  <div>Stat</div>
                </div>

                <div>Evolution</div>
              </S.ContainerInfos>
            </Content>
          </S.DetailsContainer>
          <BackTop />
        </>
      )}
    </>
  );
};

export default Details;
