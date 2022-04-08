import styled from "styled-components";

export const DataTextContainer = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
}));

export const Title = styled.h4(({ theme: { textColor } }) => ({
  fontSize: "18px",
  fontWeight: "bold",
  color: textColor,
}));

export const Description = styled.p(({ theme: { textColorInverted } }) => ({
  fontSize: "16px",
  fontWeight: 500,
  color: textColorInverted,
}));
