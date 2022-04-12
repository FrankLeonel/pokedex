import styled from "styled-components";

export const PokemonStatsContainer = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));

export const Title = styled.h2(({ theme: { textColor } }) => ({
  color: textColor,
}));

export const ContainerInfo = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
}));

export const BaseStat = styled.div(({ theme }) => ({
  width: "32px",
  minWidth: "32px",
}));

export const ContainerStatBar = styled.div(({ theme }) => ({
  width: "100%",
  borderRadius: "10px",
  backgroundColor: " #e3e3e3",
}));

export const StatBar = styled.div(
  ({ theme: { colorsPokemon }, type, percentage }) => ({
    borderRadius: "10px",
    backgroundColor: colorsPokemon[`color_${type}_type_dark`],
    width: `${percentage}%`,
    height: "100%",
    color: colorsPokemon[`color_${type}_type_dark`],
  })
);
