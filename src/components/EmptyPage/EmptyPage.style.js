import styled from "styled-components";

export const EmptyPageContainer = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flex: 1,
  width: "100%",
}));

export const Main = styled.div(({ theme }) => ({
  diplay: "flex",
  flexDirection: "column",
}));

export const Title = styled.p(({ theme: { textColor, breakpoints } }) => ({
  color: textColor,
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center",
  margin: "10px 0",

  [breakpoints.md]: {
    fontSize: "30px",
  },
}));

export const Subtitle = styled.p(
  ({ theme: { textColorInverted, breakpoints } }) => ({
    color: textColorInverted,
    fontSize: "17px",
    fontWeight: 600,
    textAlign: "center",
    wordBreak: "break-word",

    [breakpoints.md]: {
      fontSize: "20px",
    },
  })
);
