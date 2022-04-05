import styled from "styled-components";

export const Bar = styled.div(
  ({ theme: { dividerColor, colorMenu, backgroundMenu } }) => ({
    display: "flex",
    top: 0,
    left: 0,
    padding: "20px 16px",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "70px",
    borderBottom: "1px solid",
    borderColor: dividerColor,
    color: colorMenu,
    backgroundColor: backgroundMenu,
  })
);

export const NavigationItem = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
}));

export const ClosedIcon = styled.div(({ theme: { logo } }) => ({
  width: "20px",
  height: "20px",
  cursor: "pointer",

  svg: {
    width: "100%",
    height: "100%",
    path: {
      fill: logo,
    },
  },
}));
