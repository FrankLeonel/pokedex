import { BsMoonFill, BsSunFill } from "react-icons/bs";
import Switch from "react-switch";
import styled from "styled-components";

export const SwitchTheme = styled(Switch)(({ theme }) => ({
  margin: 0,
}));

export const Label = styled.label(({ theme: { textColorInverted } }) => ({
  color: textColorInverted,
  fontWeight: 700,
  transition: "color 0.2s",
  marginRight: "8px",
}));

export const IconMoon = styled(BsMoonFill)(({ theme: { generalColors } }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  margin: "0 8px",
  color: generalColors.white,
}));

export const IconSun = styled(BsSunFill)(({ theme: { generalColors } }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  color: generalColors.white,
  margin: "0 8px",
}));
