import styled from "styled-components";

export const Type = styled.li(({ theme: { breakpoints, colors }, type }) => ({
  listStyleType: "none",
  borderRadius: "20px",
  color: "#fff",
  fontSize: "12px",
  fontWeight: "bolder",
  textAlign: "center",
  padding: "3px 15px",
  marginBottom: "10px",
  transform: "translateY(10px)",
  backgroundColor: colors.colorsPokemon[`color_${type}_type_light`],

  [breakpoints.md]: {
    fontSize: "15px",
    padding: "8px 20px",
  },
}));
