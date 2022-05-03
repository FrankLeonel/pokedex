import styled from "styled-components";

export const ContainerFavorite = styled.div(({ theme: { breakpoints } }) => ({
  margin: "140px 0 30px",

  [breakpoints.md]: {
    margin: "90px 0 30px",
  },
}));

export const PokemonGrid = styled.ul(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  gridGap: "20px",
  marginBottom: "10px",

  [theme.breakpoints.md]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  [theme.breakpoints.lg]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },

  [theme.breakpoints.xl]: {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
}));
