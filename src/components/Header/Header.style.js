import { ReactComponent as Pokemon } from "assets/icons/logo-white.svg";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import styled from "styled-components";

export const Container = styled.div({
  backgroundColor: (props) => props.theme.header,
  padding: "10px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, .1)",
});

export const Logo = styled(Pokemon)({
  path: {
    fill: (props) => props.theme.logo,
  },
});

export const ContainerOptions = styled.div({
  padding: "0 10px",
  minWidth: "400px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

export const IconMoon = styled(BsMoonFill)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  margin: "0 8px",
  color: "#FFFF",
});

export const IconSun = styled(BsSunFill)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  color: "#FFFF",
  margin: "0 8px",
});
