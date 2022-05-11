import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Item = styled.li(({ theme }) => ({
  display: "block",
  alignItems: "center",
  width: "100%",
  height: "70px",
  cursor: "pointer",
}));

export const Link = styled(NavLink)(
  ({ theme: { colorMenu, dividerColor } }) => ({
    display: "flex",
    cursor: "pointer",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
    textDecoration: "none",
    boxSizing: "border-box",
    height: "100%",
    color: colorMenu,

    "&.active": {
      "+ hr": {
        backgroundColor: dividerColor,
        transition: "background-color 1s ease",
        height: "2px",
      },
    },
  })
);

export const Section = styled.div(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  width: "100%",
  height: "100%",
}));

export const Icon = styled.div(({ theme }) => ({
  display: "flex",
  flexGrow: 0,
  flexShrink: 0,
  marginRight: "10px",

  svg: {
    width: "26px",
    height: "26px",
  },
}));

export const DivTab = styled.div(({ theme }) => ({
  marginLeft: "6px",
  marginBottom: "14px",
}));
