import styled from "styled-components";

export const TabNumberFavoritesContainer = styled.div(
  ({ theme: { generalColors } }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    background: generalColors.grayLight,
    borderRadius: "18px",
    height: "18px",
    width: "18px",
  })
);

export const TextFavorites = styled.p(({ theme: { generalColors } }) => ({
  color: generalColors.white,
  fontSize: "11px",
}));
