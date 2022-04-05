import styled from "styled-components";

export const Separator = styled.hr(({ theme: { dividerColor } }) => ({
  width: "100%",
  height: "1px",
  backgroundColor: dividerColor,
}));
