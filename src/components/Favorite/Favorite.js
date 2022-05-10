import Content from "components/Content";
import EmptyPage from "components/EmptyPage";
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
          {pokemonsFavorite.length ? (
            <S.PokemonGrid>
              {pokemonsFavorite?.map((pokemon) => (
                <PokemonCard
                  key={pokemon.id}
                  pokemon={pokemon}
                  sprite={
                    pokemon.sprites.other["official-artwork"].front_default
                  }
                />
              ))}
            </S.PokemonGrid>
          ) : (
            <EmptyPage />
          )}
        </S.ContainerFavorite>
      </Content>
    </>
  );
};

export default Favorite;
