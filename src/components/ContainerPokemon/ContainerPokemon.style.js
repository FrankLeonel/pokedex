import styled from "styled-components";

export const ContainerPokemonContainer = styled.div(
  ({ theme: { generalColors, backgroundMenu } }) => ({
    backgroundColor: backgroundMenu,
    height: "auto",
    padding: "30px",
    borderRadius: "30px",
    boxShadow: `0px 0px 15px -5px ${generalColors.grayDark}`,
  })
);
