import styled from "styled-components";

export const HeaderDetailContainer = styled.div(
  ({ theme: { colorsPokemon }, type }) => ({
    backgroundColor: colorsPokemon[`color_${type}_type_dark`],
    width: "100%",
  })
);
