import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Items = styled.ul({
  "@media (max-width: 767px)": {
    display: "none",
  },

  display: "inline-flex",
  margin: `auto 28px`,
  listStyle: "none",
  alignItems: "center",
  height: "100%",
});

export const Item = styled.li({
  display: "flex",
  position: "relative",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  width: "130px",
  height: "inherit",

  "> * ": {
    color: (props) => props.theme.colorMenu,
  },
});

export const Link = styled(NavLink)({
  display: "flex",
  cursor: "pointer",
  textAlign: "center",
  alignItems: "center",
  overflow: "hidden",
  textDecoration: "none",
  boxSizing: "border-box",

  "&.active": {
    "+ hr": {
      // width: "120px",
      position: "absolute",
      margin: "auto 0",
      top: 48,
      height: "3px",
    },
  },

  "&:not(&.active)": {
    "+ hr": {
      display: "none",
    },
  },
});
