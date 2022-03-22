import pokeball from "assets/icons/pokeball.svg";
import styled from "styled-components";

export const ContainerMorePokemon = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  padding: "23px 0",
});

export const Loader = styled.div`
  margin: 30px auto;
  background: url(${pokeball}) no-repeat;
  background-size: contain;
  background-position: center;
  width: 50px;
  height: 50px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const EmptyPokemonList = styled.form({
  width: "100%",
  border: `2px solid ${(props) => props.theme.textWarning}`,
  borderRadius: "20px",
  padding: "10px",
  h3: {
    color: (props) => props.theme.textWarning,
    fontWeight: "normal",
    textAlign: "center",
  },
});
