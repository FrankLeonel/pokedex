import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import hexToRgba from "utils/hexToRgba";

export const LinkCard = styled(Link)(({ theme }) => ({
  textDecoration: "none",
}));

export const FavoriteView = styled.div(({ theme }) => ({
  width: "100%",
  justifyContent: "flex-end",
  flexDirection: "row",
  alignItems: "center",
}));

export const IconNoFavorite = styled(FaRegHeart)(({ theme }) => ({}));

export const IconFavorite = styled(FaHeart)(({ theme }) => ({}));

export const Container = styled.li(
  ({ theme: { colorsPokemon, shadow }, type }) => ({
    width: "100%",
    height: "205px",
    borderRadius: "30px",
    padding: "25px 10px 30px 20px",
    listStyleType: "none",
    boxShadow: `0px 0px 15px -5px ${hexToRgba(shadow)}`,
    transition: "0.5s",
    backgroundColor: colorsPokemon[`color_${type}_type_dark`],
    backgroundBlendMode: "soft-light",
    "&:hover": {
      transform: "translate(0, -10px)",
      cursor: "pointer",
    },
  })
);

export const Index = styled.span(({ theme }) => ({
  fontWeight: 900,
  fontSize: "25px",
  opacity: 0.5,
  marginRight: "10px",
  marginTop: "10px",
}));

const verifyNameLenght = ({ nameLength }) => {
  return nameLength > 12
    ? css`
        font-size: 20px;
      `
    : null;
};

export const HeaderCard = styled.header(
  ({ theme: { generalColors }, nameLength }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: generalColors.white,
    fontWeight: "bolder",
    fontSize: "1.17em",
    marginBottom: "15px",
    h3: {
      transform: "translateY(5px)",
      ...verifyNameLenght(nameLength),
    },
  })
);

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
