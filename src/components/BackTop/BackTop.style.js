import styled from "styled-components";

export const BackTop = styled.button(
  ({
    theme: {
      primaryColor,
      primaryHoverColor,
      textColorOnPrimary,
      generalColors,
    },
  }) => ({
    textDecoration: "none",
    padding: "9px 12px",
    color: generalColors.white,
    backgroundColor: primaryColor,
    transition: "background-color 1s ease",
    border: "none",
    borderRadius: "50%",
    position: "fixed",
    boxShadow: `3px 3px 10px ${primaryColor}`,
    zIndex: 1,
    outline: "none",
    right: 20,
    bottom: 20,

    "&:hover": {
      transition: "0.3s",
      backgroundColor: primaryHoverColor,
    },
  })
);
