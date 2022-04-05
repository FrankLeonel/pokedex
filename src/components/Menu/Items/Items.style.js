import styled from "styled-components";

export const Items = styled.ul(({ theme: { backgroundMenu } }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "0 16px",
  backgroundColor: backgroundMenu,
}));
