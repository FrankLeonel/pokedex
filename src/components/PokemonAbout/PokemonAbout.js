import ContainerPokemon from "components/ContainerPokemon";
import DataText from "components/DataText";
import PokemonType from "components/PokemonType";
import { useCallback } from "react";
import { capitalizeHelper } from "utils/capitalize";
import * as S from "./PokemonAbout.style";

const PokemonAbout = ({
  description,
  height,
  weight,
  abilities,
  weaknesses,
  resistances,
  egg_groups,
  habitat,
  shape,
}) => {
  const capitalize = useCallback(capitalizeHelper, []);
  return (
    <ContainerPokemon>
      <S.PokemonAboutContainer>
        <S.Title>About</S.Title>
        <DataText title="Description">
          {description?.replace(/(\r\n|\n|\r|\f)/gm, " ")}
        </DataText>
        <DataText title="Height">{height / 10} m</DataText>
        <DataText title="Weight">{weight / 10} kg</DataText>
        <DataText title="Groups">
          {egg_groups?.map((group) => capitalize(group.name)).join(", ")}
        </DataText>
        <DataText title="Habitat">{capitalize(habitat)}</DataText>
        <DataText title="Shape">{capitalize(shape)}</DataText>
        <DataText title="Abilities">
          {abilities
            ?.filter((ability) => !ability.is_hidden)
            .map((ability) =>
              capitalize(ability.ability.name).replace("-", " ")
            )
            .join(", ")}
        </DataText>
        <DataText title="Weaknesses">
          <ul>
            {weaknesses?.map((weakness) => (
              <PokemonType key={weakness} type={weakness} />
            ))}
          </ul>
        </DataText>
        {resistances?.length > 0 ? (
          <DataText title="Resistances">
            <ul>
              {resistances?.map((resistance) => (
                <PokemonType key={resistance} type={resistance} />
              ))}
            </ul>
          </DataText>
        ) : null}
      </S.PokemonAboutContainer>
    </ContainerPokemon>
  );
};

export default PokemonAbout;
