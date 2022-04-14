import PokemonType from "components/PokemonType";
import { useCallback } from "react";
import { capitalizeHelper } from "utils/capitalize";
import colorType from "utils/colorType";
import * as S from "./PokemonCard.style";

const PokemonCard = ({ pokemon, sprite, isFavorite }) => {
  const capitalize = useCallback(capitalizeHelper, []);

  const finalColor = colorType(
    pokemon.types[0].type.name,
    pokemon.types[1]?.type.name,
    pokemon.types.length
  );

  return (
    <S.LinkCard to={`/details/${pokemon.id}`}>
      <S.Container type1={finalColor.color1} type2={finalColor.color2}>
        <S.HeaderCard nameLength={pokemon.name.length}>
          <h3>{capitalize(pokemon.name)}</h3>
          <S.Index>#{`000${pokemon.id}`.slice(-3)}</S.Index>
        </S.HeaderCard>
        <S.Section sprite={sprite}>
          <ul>
            {pokemon.types.map((type) => (
              <PokemonType key={type.slot} type={type.type.name} />
            ))}
          </ul>
          <div className="pokemon_image" />
        </S.Section>
        {isFavorite ? <h1>Favorite</h1> : <h1>!Favorite</h1>}
      </S.Container>
    </S.LinkCard>
  );
};

export default PokemonCard;
