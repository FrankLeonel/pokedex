import Content from "components/Content";
import Header from "components/Header";
import PokemonCard from "components/PokemonCard";
import { usePokemon } from "contexts/PokemonContext";
import * as S from "./Favorite.style";

const Favorite = () => {
  const { pokemonsFavorite } = usePokemon();
  return (
    <>
      <Header />
      <Content>
        <S.ContainerFavorite>
          <S.PokemonGrid>
            {pokemonsFavorite?.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                sprite={pokemon.sprites.other["official-artwork"].front_default}
                isFavorite={true}
              />
            ))}
          </S.PokemonGrid>
        </S.ContainerFavorite>
      </Content>
    </>
  );
};

export default Favorite;
