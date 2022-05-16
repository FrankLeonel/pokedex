import { usePokemon } from "contexts/PokemonContext";
import useSearch from "hooks/useSearch";
import * as S from "./SearchBar.style";

const SearchBar = ({ handleSearch, placeholder }) => {
  const { loading } = usePokemon();
  const { search, setSearch } = useSearch();
  return (
    <S.Form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder={placeholder}
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
