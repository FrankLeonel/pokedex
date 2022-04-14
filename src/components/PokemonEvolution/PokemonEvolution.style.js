import { FaChevronRight } from "react-icons/fa";
import styled from "styled-components";

export const Title = styled.h2(({ theme: { textColor } }) => ({
  color: textColor,
}));

export const EvoluationsWrap = styled.div(({ theme: { breakpoints } }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  marginTop: "20px",

  [breakpoints.lg]: {
    flexDirection: "row",
  },
}));

export const Stage = styled.div(({ theme: { breakpoints } }) => ({
  alignSelf: "center",
  display: "grid",
  gap: "10px",

  "&.firstStage": {
    display: "inline",
  },

  "&.evolves1": {
    gridTemplateRows: "repeat(1, 1fr)",
    gridTemplateColumns: "repeat(1, 1fr)",
  },

  "&.evolves2": {
    gridTemplateRows: "repeat(2, 1fr)",
    gridTemplateColumns: "repeat(1, 1fr)",
  },

  "&.evolves3": {
    gridTemplateRows: "repeat(2, 1fr)",
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  "&.evolves8": {
    gridTemplateRows: "repeat(4, 1fr)",
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  [breakpoints.md]: {
    "&.evolves2": {
      gridTemplateRows: "repeat(1, 1fr)",
      gridTemplateColumns: "repeat(2, 1fr)",
    },

    "&.evolves3": {
      gridTemplateRows: "repeat(1, 1fr)",
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },

  [breakpoints.xl]: {
    "&.evolves8": {
      gridTemplateRows: "repeat(2, 1fr)",
      gridTemplateColumns: "repeat(4, 1fr)",
    },
  },
}));

export const ChevronRight = styled(FaChevronRight)(
  ({ theme: { breakpoints, generalColors } }) => ({
    fontSize: "50px",
    color: generalColors.grayLight,
    transform: "rotate(90deg)",
    marginTop: "20px",

    [breakpoints.lg]: {
      alignSelf: "center",
      transform: "rotate(0)",
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
