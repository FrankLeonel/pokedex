import styled from "styled-components";

export const ContentContainer = styled.div(({ theme: { breakpoints } }) => ({
  margin: "auto",
  maxWidth: "calc(1440px + 48px)",
  width: "100%",
  padding: "0 12px 0 4px",

  [breakpoints.md]: {
    padding: "10px",
    maxWidth: "calc(1440px + 128px)",
  },
}));
