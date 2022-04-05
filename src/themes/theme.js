import breakpoints from "./breakpoints";
import { colorsPokemon, neutral, red, yellow } from "./colors";
import { primaryFont, typeScale } from "./typography";

export const lightTheme = {
  breakpoints,
  colorsPokemon,
  typeScale,
  background: neutral[100],
  backgroundMenu: neutral[100],
  backgroundMenuInverted: neutral[700],
  colorMenu: neutral[700],
  colorMenuInverted: neutral[100],
  logo: neutral[800],
  headerBackground: neutral[100],
  switchColor: neutral[700],
  dividerColor: neutral[700],
  shadow: neutral[700],
  primaryColor: neutral[700],
  primaryHoverColor: neutral[800],
  textColorOnPrimary: neutral[300],
  textColor: neutral[600],
  textColorInverted: neutral[700],
  primaryFont: primaryFont,
  textWarning: red[100],
  generalColors: {
    white: neutral[100],
    black: neutral[900],
    grayDark: neutral[700],
  },
  formColor: {
    formElementBackground: neutral[200],
    textOnFormElementBackground: neutral[600],
  },
};

export const darkTheme = {
  breakpoints,
  colorsPokemon,
  typeScale,
  background: neutral[800],
  backgroundMenu: neutral[700],
  backgroundMenuInverted: neutral[100],
  colorMenu: neutral[100],
  colorMenuInverted: neutral[700],
  logo: neutral[100],
  headerBackground: neutral[700],
  switchColor: neutral[600],
  dividerColor: neutral[100],
  shadow: neutral[500],
  primaryColor: neutral[600],
  primaryHoverColor: neutral[500],
  textColorOnPrimary: neutral[100],
  textColor: neutral[400],
  textColorInverted: yellow[400],
  primaryFont: primaryFont,
  backDropColor: neutral[700],
  textWarning: red[100],
  generalColors: {
    white: neutral[100],
    black: neutral[900],
    grayDark: neutral[700],
  },
  formColor: {
    formElementBackground: neutral[800],
    textOnFormElementBackground: neutral[100],
  },
};
