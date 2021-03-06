import pokeball from "assets/icons/pokeball.svg";
import styled from "styled-components";

export const ContainerContents = styled.div(({ theme }) => ({
  margin: "60px 0 30px",
}));

export const ContainerFilter = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

export const PokemonGrid = styled.ul(({ theme: { breakpoints } }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  gridGap: "20px",
  marginBottom: "10px",

  [breakpoints.md]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  [breakpoints.lg]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },

  [breakpoints.xl]: {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
}));

export const ContainerMorePokemon = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  padding: "23px 0",
});

export const Loader = styled.div(({ theme }) => ({
  margin: "30px auto",
  background: `url(${pokeball}) no-repeat`,
  backgroundSize: "contain",
  backgroundOosition: "center",
  width: "50px",
  height: "50px",
  webkitAnimation: "spin 2s linear infinite",
  animation: "spin 1s linear infinite",
  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
}));

export const EmptyPokemonList = styled.form(({ theme: { textWarning } }) => ({
  width: "100%",
  border: "2px solid",
  borderColor: textWarning,
  borderRadius: "20px",
  padding: "10px",
  h3: {
    color: textWarning,
    fontWeight: "normal",
    textAlign: "center",
  },
}));
