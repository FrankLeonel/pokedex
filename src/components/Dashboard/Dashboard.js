import BackTop from "components/BackTop";
import Button from "components/Button";
import Content from "components/Content";
import EmptyPage from "components/EmptyPage";
import Header from "components/Header";
import SeachBar from "components/Header/SeachBar";
import PokemonCard from "components/PokemonCard";
import { endpoints } from "config/endpoints";
import { usePokemon } from "contexts/PokemonContext";
import useSearch from "hooks/useSearch";
import { useCallback, useEffect, useState } from "react";
import * as S from "./Dashboard.style";

const Dashboard = () => {
  const {
    loading,
    setLoading,
    pokemonList,
    setPokemonList,
    getPokemonSearch,
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

  const handleSearch = useCallback(
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
    [setLoading, setPokemonList, getPokemonSearch, search]
  );

  useEffect(() => {
    if (pokemonList.length) setLoading(false);
    setHasMorePokemon(!!pokemonList.length && !(pokemonList.length % 52));
  }, [setLoading, pokemonList]);

  return (
    <>
      <Header />
      <Content>
        <S.ContainerContents>
          <S.ContainerFilter>
            <SeachBar
              handleSearch={handleSearch}
              placeholder="Search pokémon..."
            />
          </S.ContainerFilter>
          {loading && <S.Loader />}

          <S.PokemonGrid>
            {pokemonList?.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                sprite={pokemon.sprites.other["official-artwork"].front_default}
              />
            ))}
          </S.PokemonGrid>

          <div>
            {!loading && hasMorePokemon && (
              <S.ContainerMorePokemon>
                <Button type="button" onClick={handleGetMorePokemon}>
                  Load more Pokémon
                </Button>
              </S.ContainerMorePokemon>
            )}

            {!loading && !pokemonList.length && (
              <EmptyPage
                title="No pokemon found!"
                subtitle="Look for pokemons that are in the database."
              />
            )}
          </div>
        </S.ContainerContents>
      </Content>
      <BackTop />
    </>
  );
};

export default Dashboard;
