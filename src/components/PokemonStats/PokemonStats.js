import ContainerPokemon from "components/ContainerPokemon";
import DataText from "components/DataText";
import { useCallback } from "react";
import { capitalizeHelper } from "utils/capitalize";
import colorType from "utils/colorType";
import * as S from "./PokemonStats.style";

const PokemonStats = ({ stats, types }) => {
  const capitalize = useCallback(capitalizeHelper, []);

  const finalColor = colorType(
    types[0].type.name,
    types[1]?.type.name,
    types.length
  );

  return (
    <ContainerPokemon>
      <S.PokemonStatsContainer>
        <S.Title>Base Stats</S.Title>
        {stats.map((stat) => (
          <DataText key={stat.stat.name} title={capitalize(stat.stat.name)}>
            <S.ContainerInfo>
              <S.BaseStat>{stat.base_stat}</S.BaseStat>
              <S.ContainerStatBar>
                <S.StatBar
                  percentage={(stat.base_stat / 250) * 100}
                  type1={finalColor.color1}
                  type2={finalColor.color2}
                />
              </S.ContainerStatBar>
            </S.ContainerInfo>
          </DataText>
        ))}
        <DataText title="Total">
          <S.ContainerInfo>
            <S.BaseStat>
              {stats.reduce((acc, curr) => acc + curr.base_stat, 0)}
            </S.BaseStat>
            <S.ContainerStatBar>
              <S.StatBar
                percentage={
                  (stats.reduce((acc, curr) => acc + curr.base_stat, 0) * 100) /
                  1500
                }
                type1={finalColor.color1}
                type2={finalColor.color2}
              />
            </S.ContainerStatBar>
          </S.ContainerInfo>
        </DataText>
      </S.PokemonStatsContainer>
    </ContainerPokemon>
  );
};

export default PokemonStats;
