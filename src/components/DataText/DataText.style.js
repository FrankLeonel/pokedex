import styled from "styled-components";

export const DataTextContainer = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "16px",
  alignItems: "center",
  width: "100%",
}));

export const ContainerTitle = styled.div(({ theme }) => ({
  minWidth: "110px",
  width: "110px",
}));

export const Title = styled.h4(({ theme: { textColor } }) => ({
  fontSize: "18px",
  fontWeight: "bold",
  color: textColor,
}));

export const Description = styled.div(({ theme: { textColorInverted } }) => ({
  fontSize: "16px",
  fontWeight: 600,
  color: textColorInverted,
  width: "100%",

  ul: {
    display: "flex",
    flexWrap: "wrap",
    li: {
      marginRight: "5px",
    },
  },
}));
