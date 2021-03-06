import styled from "styled-components";

export const ContainerPokemonContainer = styled.section(
  ({ theme: { generalColors, backgroundContainerPokemon, breakpoints } }) => ({
    backgroundColor: backgroundContainerPokemon,
    transition: "background-color 1s ease",
    width: "100%",
    height: "auto",
    padding: "20px",
    borderRadius: "30px",
    boxShadow: `0px 0px 15px -5px ${generalColors.grayDark}`,

    [breakpoints.md]: {
      padding: "30px",
    },
  })
);
