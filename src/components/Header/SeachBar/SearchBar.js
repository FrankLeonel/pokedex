import { FaSearch } from "react-icons/fa";
import * as S from "./SearchBar.style";

const SearchBar = () => {
  return (
    <S.Form>
      <input
        type="text"
        placeholder="Search pokémon..."
        // value={search}
        // onChange={(e) => setSearch(e.target.value)}
        // disabled={loading}
      />
      <button type="submit">
        <FaSearch
          style={{ marginRight: "5px", transform: "translateY(2px)" }}
        />
      </button>
    </S.Form>
  );
};

export default SearchBar;
