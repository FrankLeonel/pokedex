import ContainerPokemon from "components/ContainerPokemon";
import DataText from "components/DataText";
import { useCallback } from "react";
import { capitalizeHelper } from "utils/capitalize";
import * as S from "./PokemonStats.style";

const PokemonStats = ({ stats, type }) => {
  const capitalize = useCallback(capitalizeHelper, []);

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
                  type={type}
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
                type={type}
              />
            </S.ContainerStatBar>
          </S.ContainerInfo>
        </DataText>
      </S.PokemonStatsContainer>
    </ContainerPokemon>
  );
};

export default PokemonStats;
