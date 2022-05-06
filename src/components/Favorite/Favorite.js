import Content from "components/Content";
import Header from "components/Header";
import PokemonCard from "components/PokemonCard";
import { usePokemon } from "contexts/PokemonContext";
import { useEffect } from "react";
import * as S from "./Favorite.style";

const Favorite = () => {
  const { pokemonsFavorite } = usePokemon();

  const favList = [];
  const getArray = JSON.parse(localStorage.getItem("favorites") || "0");

  for (var i = 0; i < getArray.length; i++) {
    favList[i] = JSON.parse(
      localStorage.getItem("favItem" + getArray[i]) || "0"
    );
  }

  useEffect(() => {
    const getArray = JSON.parse(localStorage.getItem("favorites") || "0");
  }, []);

  console.log(favList);
  return (
    <>
      <Header />
      <Content>
        <S.ContainerFavorite>
          <S.PokemonGrid>
            {favList?.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                sprite={pokemon.sprites.other["official-artwork"].front_default}
              />
            ))}
          </S.PokemonGrid>
        </S.ContainerFavorite>
      </Content>
    </>
  );
};

export default Favorite;
