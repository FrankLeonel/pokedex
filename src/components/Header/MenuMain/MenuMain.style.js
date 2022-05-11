import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Items = styled.ul(({ theme: { breakpoints } }) => ({
  display: "none",

  [breakpoints.md]: {
    display: "flex",
    margin: "auto 28px",
    listStyle: "none",
    alignItems: "center",
    height: "60px",
  },
}));

export const Item = styled.li(({ theme: { colorMenu } }) => ({
  display: "flex",
  position: "relative",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "146px",
  width: "146px",
  height: "60px",

  "> * ": {
    color: colorMenu,
  },

  svg: {
    fontSize: "18px",
    marginRight: "8px",
  },

  "> div": {
    alignSelf: "flex-end",
    margin: 0,
  },
}));

export const Link = styled(NavLink)(({ theme }) => ({
  display: "flex",
  cursor: "pointer",
  overflow: "hidden",
  textDecoration: "none",
  boxSizing: "border-box",

  "&.favorites": { marginBottom: "20px" },

  "&.active": {
    "+ hr": {
      position: "absolute",
      margin: "auto 0",
      top: 60,
      height: "3px",
    },
  },

  "&:not(&.active)": {
    "+ hr": {
      display: "none",
    },
  },
}));
