import { FaSearch } from "react-icons/fa";
import * as S from "./SearchBar.style";

const SearchBar = ({ handleSubmitSearch, search, setSearch, loading }) => {
  return (
    <S.Form onSubmit={handleSubmitSearch}>
      <input
        type="text"
        placeholder="Search pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        <FaSearch
          style={{ marginRight: "5px", transform: "translateY(2px)" }}
        />
      </button>
    </S.Form>
  );
};

export default SearchBar;
