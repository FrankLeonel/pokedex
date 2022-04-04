import { PrimaryButton } from "components/Buttons/Buttons.style";
import Header from "components/Header";
import PokemonCard from "components/PokemonCard";
import { usePokemon } from "contexts/PokemonContext";
import useSearch from "hooks/useSearch";
import { useCallback, useEffect, useState } from "react";
import * as S from "./Dashboard.style";

const Dashboard = () => {
  const {
    loading,
    setLoading,
    pokemonList,
    getPokemonInterval,
    getContinueSearchList,
  } = usePokemon();
  const { search } = useSearch();

  const [hasMorePokemon, setHasMorePokemon] = useState(true);

  const handleGetMorePokemon = useCallback(async () => {
    setLoading(true);

    if (search === "")
      await getPokemonInterval(pokemonList.length + 1, pokemonList.length + 52);
    else await getContinueSearchList();

    setLoading(false);
  }, [
    setLoading,
    getPokemonInterval,
    getContinueSearchList,
    pokemonList,
    search,
  ]);

  useEffect(() => {
    if (pokemonList.length) setLoading(false);
    setHasMorePokemon(!!pokemonList.length && !(pokemonList.length % 52));
  }, [setLoading, pokemonList]);

  return (
    <>
      <Header />
      <S.ContainerContents>
        <S.PokemonGrid>
          {pokemonList.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              sprite={pokemon.sprites.other["official-artwork"].front_default}
            />
          ))}
        </S.PokemonGrid>

        {loading && <S.Loader />}

        <div>
          {!loading && hasMorePokemon && (
            <S.ContainerMorePokemon>
              <PrimaryButton type="button" onClick={handleGetMorePokemon}>
                Load more Pokémon
              </PrimaryButton>
            </S.ContainerMorePokemon>
          )}

          {!loading && !pokemonList.length && (
            <S.EmptyPokemonList>
              <h3>Nenhum pokémon foi encontrado!</h3>
            </S.EmptyPokemonList>
          )}
        </div>
      </S.ContainerContents>
    </>
  );
};

export default Dashboard;
