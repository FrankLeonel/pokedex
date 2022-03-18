import styled from "styled-components";

export const PrimaryButton = styled.button({
  backgroundColor: (props) => props.theme.primaryColor,
  color: (props) => props.theme.textColorOnPrimary,
  border: "none",
  borderRadius: "8px",
  padding: "18px 12px",

  "&:hover": {
    backgroundColor: (props) => props.theme.primaryHoverColor,
  },
});

export const SecondaryButton = styled.button({
  background: "none",
  border: `2px solid ${(props) => props.theme.primaryColor}`,
  color: (props) => props.theme.primaryColor,
  borderRadius: "8px",
  padding: "18px 12px",

  "&:hover": {
    backgroundColor: (props) => props.theme.primaryHoverColor,
  },
});

export const TertiaryButton = styled.button({
  background: "none",
  border: "none",
  color: (props) => props.theme.textColorOnPrimary,
  borderRadius: "8px",
  padding: "12px",
  fontWeight: "600",

  "&:hover": {
    color: (props) => props.theme.textColor,
  },
});
