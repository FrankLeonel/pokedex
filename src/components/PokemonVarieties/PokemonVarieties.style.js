import styled from "styled-components";

export const Select = styled.select(
  ({ theme: { generalColors, backgroundSelect, breakpoints } }) => ({
    backgroundColor: backgroundSelect,
    color: generalColors.white,
    width: "100%",
    alignSelf: "flex-end",
    textAlign: "center",
    cursor: "pointer",
    padding: "8px 16px",
    fontSize: "16px",

    [breakpoints.md]: {
      width: "300px",
    },
  })
);

export const Option = styled.option(
  ({ theme: { backgroundOption, colorOption } }) => ({
    color: colorOption,
    background: backgroundOption,
    fontSize: "16px",
    cursor: "pointer",
    padding: `8px 16px !important`,
    height: "80px",
  })
);
