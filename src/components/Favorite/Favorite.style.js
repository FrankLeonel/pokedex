import styled from "styled-components";

export const ContainerFavorite = styled.div(({ theme }) => ({
  marginTop: "90px",
  display: "flex",
  flexDirection: "column",
}));

export const FilterButton = styled.button(
  ({ theme: { logo, textColorInverted } }) => ({
    padding: 0,
    backgroundColor: "transparent",
    border: "none",
    alignSelf: "flex-end",
    marginBottom: "20px",
    fontSize: "20px",
    fontWeight: 700,
    color: textColorInverted,
    width: "auto",

    svg: {
      width: "fit-content",
      height: "fit-content",
      marginLeft: "8px",
      path: {
        fill: logo,
        transition: "fill 1s ease",
      },
    },
  })
);

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
