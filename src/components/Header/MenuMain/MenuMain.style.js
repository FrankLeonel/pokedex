import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Items = styled.ul(({ theme: { breakpoints } }) => ({
  display: "none",

  [breakpoints.md]: {
    display: "flex",
    margin: "auto 28px",
    listStyle: "none",
    alignItems: "center",
  },
}));

export const Item = styled.li(({ theme: { colorMenu } }) => ({
  display: "flex",
  position: "relative",
  flexDirection: "column",
  alignItems: "center",
  minWidth: "130px",
  width: "130px",
  height: "inherit",

  "> * ": {
    color: colorMenu,
  },
}));

export const Link = styled(NavLink)(({ theme }) => ({
  display: "flex",
  cursor: "pointer",
  overflow: "hidden",
  textDecoration: "none",
  boxSizing: "border-box",

  "&.active": {
    "+ hr": {
      position: "absolute",
      margin: "auto 0",
      top: 38,
      height: "3px",
    },
  },

  "&:not(&.active)": {
    "+ hr": {
      display: "none",
    },
  },
}));
