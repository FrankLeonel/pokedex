import imgPokeball from "assets/icons/pokeball.svg";
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

export const Container = styled.li(({ theme: { colors, shadow }, type }) => ({
  width: "100%",
  height: "205px",
  borderRadius: "30px",
  padding: "25px 10px 30px 20px",
  listStyleType: "none",
  boxShadow: `0px 0px 15px -5px ${hexToRgba(shadow)}`,
  backgroundImage: `url(${imgPokeball})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "45%",
  backgroundPosition: "bottom right",
  transition: "0.5s",
  backgroundColor: colors.colorsPokemon[`color_${type}_type_dark`],
  backgroundBlendMode: "soft-light",
  "&:hover": {
    transform: "translate(0, -10px)",
    cursor: "pointer",
  },
}));

export const Index = styled.span`
  font-weight: 900;
  font-size: 25px;
  opacity: 0.5;
  margin-right: 10px;
  margin-top: 10px;
`;

export const HeaderCard = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-weight: bolder;
  font-size: 23px;
  margin-bottom: 15px;
  h3 {
    transform: translateY(5px);
    ${(props) =>
      props.nameLength > 12 &&
      css`
        font-size: 20px;
      `}
  }
`;

export const Section = styled.section`
  display: flex;
  padding-bottom: 20px;
  height: 100%;
  ul {
    display: flex;
    flex-direction: column;
  }
  .pokemon_image {
    ${(props) =>
      props.sprite &&
      css`
        background-image: url(${props.sprite});
      `}
    width: 100%;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    transform: translateY(-10px);
  }
`;
