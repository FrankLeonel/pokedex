import { ReactComponent as Pokemon } from "assets/icons/logo-white.svg";
import styled from "styled-components";
import hexToRgba from "utils/hexToRgba";

export const Header = styled.div(({ theme: { headerBackground } }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 99,
  width: "100%",
  display: "flex",
  alignItems: "center",
  height: "64px",
  backgroundColor: headerBackground,
  transition: "background-color 1s ease",
}));

export const Container = styled.div(({ theme: { generalColors, header } }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  backgroundColor: header,
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "64px",
  boxShadow: `0 1px 2px 0 ${hexToRgba(generalColors.black, 0.1)}`,
}));

export const Section = styled.div(({ theme }) => ({
  display: "flex",
  flex: 1,
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "100%",
}));

export const Wrapper = styled.section(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  height: "inherit",
}));

export const Logo = styled(Pokemon)(({ theme: { logo } }) => ({
  path: {
    fill: logo,
    transition: "fill 1s ease",
  },
}));

export const MenuBurger = styled.button(({ theme: { breakpoints, logo } }) => ({
  display: "block",
  justifyContent: "center",
  alignItems: "center",
  width: "40px",
  height: "40px",
  marginRight: "12px",
  backgroundColor: "transparent",
  border: "none",

  svg: {
    width: "fit-content",
    height: "fit-content",
    path: {
      fill: logo,
      transition: "fill 1s ease",
    },
  },

  [breakpoints.md]: {
    display: "none",
  },
}));

export const ContainerOptions = styled.div(({ theme }) => ({
  display: "flex",
  margin: 0,
  padding: 0,
  alignSelf: "center",
  alignItems: "center",
  justifyContent: "flex-end",
  height: "100%",
}));
