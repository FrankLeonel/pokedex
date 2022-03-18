import styled from "styled-components";

export const Drawer = styled.div({
  position: "fixed",
  margin: 0,
  padding: 0,
  top: 0,

  width: "300px",
  maxWidth: "80%",
  height: "100%",
  boxShadow: "0px 10px 28px rgba(40, 46, 46, 0.2)",
  backgroundColor: "#000",
  zIndex: 9999,

  "&.left": {
    left: 0,
    float: "left",
    transform: (props) => (props.show ? "translateX(0)" : "translateX(-100%)"),
  },

  "&.right": {
    right: 0,
    float: "right",
    transform: (props) => (props.show ? "translateX(0)" : "translateX(100%)"),
  },

  transition: "transform 0.3s ease-out, z-index 0.2s ease-out",

  "@media (min-width: 768px)": {
    display: "none",
  },
});
