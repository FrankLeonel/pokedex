import PokemonType from "components/PokemonType";
import { usePokemon } from "contexts/PokemonContext";
import { useCallback } from "react";
import { capitalizeHelper } from "utils/capitalize";
import colorType from "utils/colorType";
import * as S from "./PokemonCard.style";

const PokemonCard = ({ pokemon, sprite }) => {
  const capitalize = useCallback(capitalizeHelper, []);

  const { pokemonsFavorite } = usePokemon();

  const finalColor = colorType(
    pokemon.types[0].type.name,
    pokemon.types[1]?.type.name,
    pokemon.types.length
  );

  return (
    <S.Container type1={finalColor.color1} type2={finalColor.color2}>
      <S.LinkCard to={`/details/${pokemon.id}`}>
        <S.HeaderCard>
          <h3>{capitalize(pokemon.name)}</h3>
          <S.ContainerRight>
            <S.Index>#{`000${pokemon.id}`.slice(-3)}</S.Index>
            <S.FavoriteView>
              {pokemonsFavorite &&
              pokemonsFavorite.some((item) => item.name === pokemon.name) ? (
                <S.IconFavorite />
              ) : (
                <S.IconNoFavorite />
              )}
            </S.FavoriteView>
          </S.ContainerRight>
        </S.HeaderCard>
        <S.Section sprite={sprite}>
          <ul>
            {pokemon.types.map((type) => (
              <PokemonType key={type.slot} type={type.type.name} />
            ))}
          </ul>

          <S.Image
            alt="image-pokemon"
            src={sprite}
            visibleByDefault={false}
            delayMethod={"debounce"}
            width={135}
            height={135}
          />

          <div />
        </S.Section>
      </S.LinkCard>
    </S.Container>
  );
};

export default PokemonCard;
