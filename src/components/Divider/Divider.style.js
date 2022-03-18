import styled from "styled-components";

export const Separator = styled.hr({
  width: "100%",
  height: "1px",
  backgroundColor: (props) => props.theme.dividerColor,
});
