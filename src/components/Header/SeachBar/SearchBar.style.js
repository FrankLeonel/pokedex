import styled from "styled-components";

export const Form = styled.form(
  ({ theme: { breakpoints, formColor, primaryColor, primaryHoverColor } }) => ({
    margin: "10px 0",
    width: "100%",
    display: "flex",
    justifyContent: "center",

    [breakpoints.md]: {
      margin: 0,
    },

    input: {
      padding: "10px 20px",
      fontSize: "17px",
      border: "1px solid white",
      borderRight: "none",
      float: "left",
      width: "78%",
      backgroundColor: formColor.formElementBackground,
      color: formColor.textOnFormElementBackground,
      borderRadius: "20px 0 0 20px",

      [breakpoints.md]: {
        width: "85%",
      },
    },
    button: {
      float: "left",
      width: "12%",
      padding: "11px",
      color: "white",
      fontSize: "17px",
      border: "1px solid white",
      borderLeft: "none",
      borderRadius: "0 20px 20px 0",
      backgroundColor: primaryColor,
      transition: "background-color 0.2s",

      [breakpoints.md]: {
        width: "15%",
      },
    },
    "button:hover": {
      backgroundColor: primaryHoverColor,
    },
    "&:after": {
      content: "",
      clear: "both",
      display: "table",
    },
  })
);
