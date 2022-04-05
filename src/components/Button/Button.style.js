import styled from "styled-components";
import hexToRgba from "utils/hexToRgba";

export const Button = styled.button(
  ({ theme: { primaryColor, textColorOnPrimary, primaryHoverColor } }) => ({
    backgroundColor: primaryColor,
    color: textColorOnPrimary,
    border: "none",
    borderRadius: "8px",
    padding: "18px 12px",
    margin: 0,
    transition: "background 0.3s ease 0s",

    ":hover": {
      boxShadow: `0px 15px 20px ${hexToRgba(primaryColor, 0.4)}`,
    },

    ":active": {
      boxShadow: `inset 0px 5px 10px 0px ${hexToRgba(primaryHoverColor, 0.4)}`,
    },
  })
);
