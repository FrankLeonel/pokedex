import PokemonType from "components/PokemonType";
import { useCallback } from "react";
import { capitalize } from "utils/capitalize";
import * as S from "./PokemonCard.style";

const PokemonCard = ({ pokemon, sprite }) => {
  const capitalizeHelper = useCallback(capitalize, []);

  return (
    <S.LinkCard to={`/details/${pokemon.id}`}>
      <S.Container type={`${pokemon.types[0].type.name}`}>
        <S.HeaderCard nameLength={pokemon.name.length}>
          <h3>{capitalizeHelper(pokemon.name)}</h3>
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
      </S.Container>
    </S.LinkCard>
  );
};

export default PokemonCard;
