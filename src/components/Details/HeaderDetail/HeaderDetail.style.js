import { BsStar, BsStarFill } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import hexToRgba from "utils/hexToRgba";

export const HeaderDetailContainer = styled.div(
  ({ theme: { colorsPokemon, generalColors }, type1, type2 }) => ({
    background: `linear-gradient(${
      colorsPokemon[`color_${type1}_type_dark`]
    }, ${colorsPokemon[`color_${type2}_type_dark`]})`,
    width: "100%",
    heigth: "auto",

    boxShadow: `0 2px 10px ${hexToRgba(generalColors.black, 0.4)}`,

    ".icon": {
      color: generalColors.white,
      transition: "color 0.2s",
      zIndex: 1,
      fontSize: "25px",
      ":hover": {
        color: generalColors.grayDark,
      },
    },
  })
);

export const Nav = styled.div(({ theme }) => ({
  paddingTop: "40px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));

export const ContainerRight = styled.div(({ theme }) => ({
  display: "flex",
  minWidth: "190px",
  width: "180px",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const FavoriteView = styled.div(({ theme: { generalColors } }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  cursor: "pointer",

  p: {
    fontSize: "20px",
    color: generalColors.white,
    fontWeight: 800,
  },
}));

export const IconNoFavorite = styled(BsStar)(
  ({ theme: { generalColors } }) => ({
    fontSize: "25px",
    marginRight: "10px",
    path: {
      fill: generalColors.white,
    },
  })
);

export const IconFavorite = styled(BsStarFill)(
  ({ theme: { generalColors } }) => ({
    fontSize: "25px",
    marginRight: "10px",
    path: {
      fill: generalColors.white,
    },
  })
);

export const Button = styled.button(({ theme: { primaryColor } }) => ({
  border: "none",
  backgroundColor: "transparent",
  color: primaryColor,
}));

export const Container = styled.div(
  ({ theme: { generalColors, breakpoints } }) => ({
    margin: "0",
    display: "block",
    justifyContent: "center",
    padding: "20px 20px 0 0",
    paddingRight: 0,
    alignItems: "center",
    color: generalColors.white,
    fontWeight: "bolder",
    fontSize: "23px",

    ".icon": {
      display: "none",
    },

    [breakpoints.md]: {
      display: "flex",
      justifyContent: "space-between",
      padding: "20px 0 20px 0",

      ".icon": {
        display: "block",
      },
    },
  })
);

export const ChevronLeft = styled(FaChevronLeft)(({ theme }) => ({
  marginRigth: "10px",
}));

export const ChevronRight = styled(FaChevronRight)(({ theme }) => ({
  marginLeft: "10px",
}));

export const Infos = styled.div(({ theme: { breakpoints } }) => ({
  transform: "translateY(15px)",
  ul: {
    display: "flex",
    li: {
      marginRight: "5px",
    },
  },

  [breakpoints.md]: {
    transform: "translateY(0)",
  },
}));

export const Title = styled.div(({ theme: { breakpoints } }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  h1: {
    marginRight: "30px",
    fontSize: "40px",
  },
  span: {
    fontSize: "20px",
  },
  [breakpoints.md]: {
    h1: {
      fontSize: "2em",
    },
  },
}));

export const PokemonImage = styled.div(({ theme: { breakpoints } }) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  transform: "translateY(35px)",
  ".icon": {
    display: "inline",
  },

  [breakpoints.md]: {
    transform: "translateY(0)",
    ".icon": {
      display: "none",
    },
  },
}));

export const ContainerImages = styled.div(({ theme }) => ({
  position: "relative",
  width: "220px",
  height: "220px",
}));

export const Image = styled(LazyLoadImage)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
}));

export const ImgPokemon = styled.img(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
}));
