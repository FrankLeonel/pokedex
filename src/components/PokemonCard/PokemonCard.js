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
    <S.LinkCard to={`/details/${pokemon.id}`}>
      <S.Container type1={finalColor.color1} type2={finalColor.color2}>
        <S.HeaderCard>
          <h3>{capitalize(pokemon.name)}</h3>
          <S.Index>#{`000${pokemon.id}`.slice(-3)}</S.Index>
          <S.FavoriteView>
            {pokemonsFavorite && pokemonsFavorite.includes(pokemon.id) ? (
              <S.IconFavorite />
            ) : (
              <S.IconNoFavorite />
            )}
          </S.FavoriteView>
        </S.HeaderCard>
        <S.Section sprite={sprite}>
          <ul>
            {pokemon.types.map((type) => (
              <PokemonType key={type.slot} type={type.type.name} />
            ))}
          </ul>
          <div className="pokemon_image" />
        </S.Section>
      </S.Container>
    </S.LinkCard>
  );
};

export default PokemonCard;
