import { BsStar, BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import hexToRgba from "utils/hexToRgba";

export const LinkCard = styled(Link)(({ theme }) => ({
  textDecoration: "none",
}));

export const Container = styled.li(
  ({ theme: { colorsPokemon, shadow }, type1, type2 }) => ({
    width: "100%",
    height: "205px",
    borderRadius: "30px",
    padding: "20px 10px 30px 20px",
    listStyleType: "none",
    boxShadow: `0px 0px 15px -5px ${hexToRgba(shadow)}`,
    transition: "0.5s",
    background: `linear-gradient(${
      colorsPokemon[`color_${type1}_type_dark`]
    }, ${colorsPokemon[`color_${type2}_type_dark`]})`,
    backgroundBlendMode: "soft-light",

    "&:hover": {
      transform: "translate(0, -10px)",
      cursor: "pointer",
    },
  })
);

export const HeaderCard = styled.header(({ theme: { generalColors } }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: generalColors.white,
  fontWeight: "bolder",
  fontSize: "1.17em",
  marginBottom: "15px",
  h3: {
    transform: "translateY(5px)",
  },
}));

export const Index = styled.span(({ theme }) => ({
  fontWeight: 900,
  fontSize: "25px",
  opacity: 0.5,
  marginRight: "10px",
  marginTop: "10px",
}));

export const FavoriteView = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  paddingRight: "10px",
  paddingTop: "10px",
}));

export const IconNoFavorite = styled(BsStar)(({ theme }) => ({}));

export const IconFavorite = styled(BsStarFill)(({ theme }) => ({}));

export const Section = styled.section(({ theme, sprite }) => ({
  display: "flex",
  paddingBottom: "20px",
  height: "100%",
  ul: {
    display: "flex",
    flexDirection: "column",
  },

  ".pokemon_image": {
    backgroundImage: `url(${sprite})`,
    width: "100%",
    backgroundSize: "contain",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    transform: "translateY(-10px)",
  },
}));
