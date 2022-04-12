import { FaChevronRight } from "react-icons/fa";
import styled from "styled-components";

export const PokemonEvolutionContainer = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));

export const Title = styled.h2(({ theme: { textColor } }) => ({
  color: textColor,
}));

export const EvoluationsWrap = styled.div(({ theme: { breakpoints } }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  marginTop: "20px",

  [breakpoints.md]: {
    flexDirection: "row",
  },
}));

export const ChevronRight = styled(FaChevronRight)(
  ({ theme: { breakpoints, generalColors } }) => ({
    fontSize: "50px",
    color: generalColors.grayLight,
    transform: "rotate(90deg)",
    marginTop: "20px",

    [breakpoints.md]: {
      transform: "rotate(0)",
      alignSelf: "center",
    },
  })
);

export const Evolution = styled.div(({ theme }) => ({
  textAlign: "center",
  float: "left",
  padding: "5px",
  transition: "0.5s",

  "&:hover": {
    transform: "translate(0, -10px)",
    cursor: "pointer",
  },

  img: {
    width: "200px",
    "@media (max-width: 850px)": {
      width: "55%",
    },
  },
}));

export const Image = styled.img(({ theme: { breakpoints } }) => ({
  width: "55%",

  [breakpoints.md]: {
    width: "200px",
  },
}));

export const Name = styled.div(
  ({ theme: { textColor, textColorInverted } }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",

    h3: {
      marginRight: "10px",
      color: textColorInverted,
    },
    span: {
      fontWeight: 900,
      fontsize: "18px",
      color: textColor,
    },
  })
);
