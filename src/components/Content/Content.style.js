import styled from "styled-components";

export const ContentContainer = styled.div(({ theme: { breakpoints } }) => ({
  margin: "auto",
  maxWidth: "calc(1440px + 48px)",
  width: "100%",
  padding: "10px",

  [breakpoints.md]: {
    padding: "0 20px",
    maxWidth: "calc(1440px + 128px)",
  },
}));
