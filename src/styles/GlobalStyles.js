import { createGlobalStyle } from "styled-components";
import { primaryFont } from "utils/typography";

export const GlobalStyles = createGlobalStyle({
  "*": {
    margin: 0,
    padding: 0,
    outline: 0,
    boxSizing: "border-box",
  },

  html: {
    scrollBehavior: "smooth",
  },

  body: {
    backgroundColor: (props) => props.theme.background,
    backgroundBlendMode: "lighten",
    backgroundRepeat: "no-repeat",
    backgroundSize: "70vw",
    backgroundPositionX: "64vw",
    backgroundPositionY: "-20vw",
    backgroundAttachment: "fixed",
    fontFamily: primaryFont,

    "&:after": {
      opacity: "0.8",
    },
  },

  button: {
    cursor: "pointer",
    fontSize: "20px",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    svg: {
      margin: "0 10px 0",
    },
  },
});
