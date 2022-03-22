import { PrimaryButton } from "components/Buttons/Buttons.style";
import Header from "components/Header";
import PokemonCard from "components/PokemonCard";
import { endpoints } from "config/endpoints";
import { usePokemon } from "contexts/PokemonContext";
import useSearch from "hooks/useSearch";
import { useCallback, useEffect, useState } from "react";
import * as S from "./Dashboard.style";

const Dashboard = () => {
  const {
    pokemonList,
    setPokemonList,
    getPokemonInterval,
    getPokemonSearch,
    getContinueSearchList,
  } = usePokemon();
  const { search, setSearch } = useSearch();

  const [loading, setLoading] = useState(false);
  const [hasMorePokemon, setHasMorePokemon] = useState(true);

  const handleGetMorePokemon = useCallback(async () => {
    setLoading(true);

    if (search === "")
      await getPokemonInterval(pokemonList.length + 1, pokemonList.length + 52);
    else await getContinueSearchList();

    setLoading(false);
  }, [getPokemonInterval, getContinueSearchList, pokemonList, search]);

  const handleSubmitSearch = useCallback(
    async (event) => {
      event.preventDefault();
      setPokemonList([]);
      setLoading(true);

      const { data } = await endpoints.getContinueSearchList();
      const listPokemonNames = data.results;

      const matchSearchList = listPokemonNames.filter((pokemon) => {
        return pokemon.name.includes(search.toLowerCase());
      });

      await getPokemonSearch(matchSearchList);
      setLoading(false);
    },
    [setPokemonList, getPokemonSearch, search]
  );

  useEffect(() => {
    if (pokemonList.length) setLoading(false);
    setHasMorePokemon(!!pokemonList.length && !(pokemonList.length % 52));
  }, [pokemonList]);

  return (
    <>
      <Header
        handleSubmitSearch={handleSubmitSearch}
        search={search}
        loading={loading}
        setSearch={setSearch}
      />
      <div>
        {pokemonList.map((pokemon) => (
          <PokemonCard name={pokemon.name} key={pokemon.id} />
        ))}
      </div>

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
            <h3>No Pokémon matches your search!</h3>
          </S.EmptyPokemonList>
        )}
      </div>
    </>
  );
};

export default Dashboard;
