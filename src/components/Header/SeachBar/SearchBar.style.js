import styled from "styled-components";

export const Form = styled.form({
  "@media (max-width: 767px)": {
    margin: "10px 0",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  input: {
    padding: "10px 20px",
    fontSize: "17px",
    border: "1px solid white",
    borderRight: "none",
    float: "left",
    width: "80%",
    backgroundColor: (props) => props.theme.formElementBackground,
    color: (props) => props.theme.textOnFormElementBackground,
    borderRadius: "20px 0 0 20px",
    "@media (max-width: 767px)": {
      width: "70%",
    },
  },
  button: {
    float: "left",
    width: "20%",
    padding: "11px",
    color: "white",
    fontSize: "17px",
    border: "1px solid white",
    borderLeft: "none",
    borderRadius: "0 20px 20px 0",
    backgroundColor: (props) => props.theme.primaryColor,
    transition: "background-color 0.2s",

    "@media (max-width: 767px)": {
      width: "20%",
    },
  },
  "button:hover": {
    backgroundColor: (props) => props.theme.primaryHoverColor,
  },
  "&:after": {
    content: "",
    clear: "both",
    display: "table",
  },
});
