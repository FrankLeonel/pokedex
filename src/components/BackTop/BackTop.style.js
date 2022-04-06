import styled from "styled-components";

export const BackTop = styled.button(
  ({ theme: { primaryColor, generalColors } }) => ({
    textDecoration: "none",
    padding: "10px",
    color: generalColors.white,
    backgroundColor: primaryColor,
    border: "none",
    borderRadius: "50px",
    position: "fixed",
    boxShadow: `3px 3px 10px ${primaryColor}`,
    zIndex: 1,
    outline: "none",
    right: "10px",
    bottom: "20px",
  })
);
