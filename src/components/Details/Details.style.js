import pokeball from "assets/icons/pokeball.svg";
import styled from "styled-components";

export const DetailsContainer = styled.div(({ theme }) => ({}));

export const LoadingContainer = styled.div(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const Loader = styled.div(({ theme }) => ({
  margin: "30px auto",
  background: `url(${pokeball}) no-repeat`,
  backgroundSize: "contain",
  backgroundOosition: "center",
  width: "100px",
  height: "100px",
  webkitAnimation: "spin 2s linear infinite",
  animation: "spin 1s linear infinite",
  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
}));
