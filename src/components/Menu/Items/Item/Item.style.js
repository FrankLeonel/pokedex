import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Item = styled.li({
  display: "block",
  alignItems: "center",
  // color: (props) => props.theme.colorMenu,
  width: "100%",
  height: "70px",
  cursor: "pointer",
});

export const Link = styled(NavLink)({
  display: "flex",
  cursor: "pointer",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "space-between",
  overflow: "hidden",
  textDecoration: "none",
  boxSizing: "border-box",
  height: "100%",
  color: (props) => props.theme.colorMenu,

  "&.active": {
    "+ hr": {
      // width: "100px",
      backgroundColor: (props) => props.theme.dividerColor,
      height: "2px",
    },
  },
});

export const Section = styled.div({
  display: "inline-flex",
  alignItems: "center",
  width: "100%",
  height: "100%",
});

export const Icon = styled.div({
  display: "flex",
  flexGrow: 0,
  flexShrink: 0,
  width: "24px",
  height: "24px",
  marginRight: "20px",

  svg: {
    width: "fit-content",
    height: "fit-content",
  },
});
