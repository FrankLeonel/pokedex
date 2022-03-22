import { neutral, red, yellow } from "./colors";
import { primaryFont } from "./typography";

export const lightTheme = {
  background: neutral[100],
  backgroundMenu: neutral[100],
  backgroundMenuInverted: neutral[700],
  colorMenu: neutral[700],
  colorMenuInverted: neutral[100],
  logo: neutral[800],
  header: neutral[100],
  switchColor: neutral[700],
  dividerColor: neutral[700],
  primaryColor: neutral[700],
  primaryHoverColor: neutral[800],
  textColorOnPrimary: neutral[300],
  textColor: neutral[600],
  textColorInverted: neutral[700],
  formElementBackground: neutral[200],
  textOnFormElementBackground: neutral[600],
  textWarning: red[100],
  primaryFont: primaryFont,
};

export const darkTheme = {
  background: neutral[800],
  backgroundMenu: neutral[700],
  backgroundMenuInverted: neutral[100],
  colorMenu: neutral[100],
  colorMenuInverted: neutral[700],
  logo: neutral[100],
  header: neutral[700],
  switchColor: neutral[600],
  dividerColor: neutral[100],
  primaryColor: neutral[600],
  primaryHoverColor: neutral[500],
  textColorOnPrimary: neutral[100],
  textColor: neutral[400],
  textColorInverted: yellow[400],
  textWarning: red[100],
  primaryFont: primaryFont,
  formElementBackground: neutral[800],
  textOnFormElementBackground: neutral[100],
};
