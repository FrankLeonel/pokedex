import styled from "styled-components";

export const PokemonAboutContainer = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));

export const Title = styled.h2(({ theme: { textColor } }) => ({
  color: textColor,
}));
