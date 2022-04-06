import { endpoints } from "config/endpoints";
import { usePokemon } from "contexts/PokemonContext";
import useSearch from "hooks/useSearch";
import { useCallback } from "react";
import * as S from "./SearchBar.style";

const SearchBar = () => {
  const { loading, setLoading, setPokemonList, getPokemonSearch } =
    usePokemon();
  const { search, setSearch } = useSearch();

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
  return (
    <S.Form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        <S.SearchIcon />
      </button>
    </S.Form>
  );
};

export default SearchBar;
