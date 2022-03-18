import { ReactComponent as Pokemon } from "assets/icons/logo-white.svg";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import Switch from "react-switch";
import styled from "styled-components";

export const Header = styled.div({
  "@media (max-width: 767px)": {
    display: "flex",
    flexDirection: "column",
  },
});

export const Container = styled.div({
  "@media (max-width: 820px)": {
    padding: "0 12px 0 4px",

    "> *": {
      paddingBottom: 0,
    },
  },

  backgroundColor: (props) => props.theme.header,
  padding: "10px",
  width: "100%",
  height: "60px",
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, .1)",
});

export const Section = styled.div({
  display: "flex",
  flex: 1,
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "100%",
});

export const Wrapper = styled.section({
  display: "inline-flex",
  alignItems: "center",
  height: "inherit",
});

export const Logo = styled(Pokemon)({
  path: {
    fill: (props) => props.theme.logo,
  },
});

export const MenuBurger = styled.button({
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
      fill: (props) => props.theme.logo,
    },
  },

  "@media (min-width: 768px)": {
    display: "none",
  },
});

export const ContainerOptions = styled.div(() => ({
  display: "flex",
  margin: 0,
  padding: 0,
  alignSelf: "center",
  alignItems: "center",
  justifyContent: "flex-end",
  height: "100%",
}));

export const SwitchTheme = styled(Switch)({
  marginRight: "8px",
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

export const Form = styled.form({
  input: {
    padding: "10px 20px",
    fontSize: "17px",
    border: "1px solid white",
    borderRight: "none",
    float: "left",
    width: "80%",
    backgroundColor: (props) => props.theme.formElementBackground,
    color: (props) => props.theme.textOnFormElementBackground,
    borderRadius: "20px 0 0 20px",
  },
  button: {
    float: "left",
    width: "20%",
    padding: "11px",
    color: "white",
    fontSize: "17px",
    border: "1px solid white",
    borderLeft: "none",
    borderRadius: "0 20px 20px 0",
    backgroundColor: (props) => props.theme.primaryColor,
    transition: "background-color 0.2s",
  },
  "button:hover": {
    backgroundColor: (props) => props.theme.primaryHoverColor,
  },
  "&:after": {
    content: "",
    clear: "both",
    display: "table",
  },
});
