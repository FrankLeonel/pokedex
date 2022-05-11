import * as S from "./TabNumberFavorites.style";

const TabNumberFavorites = ({ length }) => {
  return (
    <S.TabNumberFavoritesContainer>
      <S.TextFavorites>{length}</S.TextFavorites>
    </S.TabNumberFavoritesContainer>
  );
};

export default TabNumberFavorites;
