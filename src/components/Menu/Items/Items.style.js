import styled from "styled-components";

export const Items = styled.ul({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "0 16px",
  backgroundColor: (props) => props.theme.backgroundMenu,
});
