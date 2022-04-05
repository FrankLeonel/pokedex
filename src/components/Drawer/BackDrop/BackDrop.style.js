import styled from "styled-components";

export const BackDrop = styled.div(
  ({ theme: { breakpoints, generalColors }, show }) => ({
    position: "fixed",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 100,
    backgroundColor: generalColors.grayDark,

    visibility: show ? "visible" : "hidden",
    opacity: show ? "0.8" : 0,
    transition: "all .3s ease-in-out",

    overflowY: "hidden",
    overflowX: "hidden",

    [breakpoints.md]: {
      display: "none",
    },
  })
);
