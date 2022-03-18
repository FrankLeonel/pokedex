import styled from "styled-components";

export const BackDrop = styled.div({
  position: "fixed",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 100,
  backgroundColor: "#282E2E",

  visibility: (props) => (props.show ? "visible" : "hidden"),
  opacity: (props) => (props.show ? "0.8" : 0),
  transition: "all .3s ease-in-out",

  overflowY: "hidden",
  overflowX: "hidden",

  "@media (min-width: 768px)": {
    display: "none",
  },
});
