import { ReactComponent as Pokemon } from "assets/icons/logo-white.svg";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import Switch from "react-switch";
import styled from "styled-components";
import hexToRgba from "utils/hexToRgba";

export const Header = styled.div(
  ({ theme: { breakpoints, headerBackground, generalColors } }) => ({
    position: "sticky",
    top: 0,
    left: 0,
    zIndex: 1,
    width: "100%",
    height: "60px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    backgroundColor: headerBackground,
    boxShadow: `0 1px 2px 0 ${hexToRgba(generalColors.black, 0.1)}`,

    [breakpoints.md]: {
      display: "flex",
      flexDirection: "row",
    },
  })
);

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

export const SwitchTheme = styled(Switch)(({ theme }) => ({
  marginRight: "8px",
}));

export const IconMoon = styled(BsMoonFill)(({ theme: { white } }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  margin: "0 8px",
  color: white,
}));

export const IconSun = styled(BsSunFill)(({ theme: { white } }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  color: white,
  margin: "0 8px",
}));
