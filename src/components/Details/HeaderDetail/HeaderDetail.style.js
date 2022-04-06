import { FaArrowLeft } from "react-icons/fa";
import styled from "styled-components";

export const HeaderDetailContainer = styled.div(
  ({ theme: { colorsPokemon }, type }) => ({
    backgroundColor: colorsPokemon[`color_${type}_type_dark`],
    width: "100%",
    heigth: "auto",
  })
);

export const Container = styled.div(({ theme }) => ({
  paddingTop: "40px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));

export const Nav = styled.nav(({ theme }) => ({
  padding: "40px 0",
}));

export const ArrowLeft = styled(FaArrowLeft)(
  ({ theme: { generalColors } }) => ({
    color: generalColors.white,
    transition: "color 0.2s",
    zIndex: 1,
    fontSize: "25px",
    "&:hover": {
      color: generalColors.grayDark,
    },
  })
);
