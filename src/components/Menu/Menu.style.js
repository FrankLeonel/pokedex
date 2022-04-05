import styled, { css, keyframes } from "styled-components";

const moveToLeft = keyframes`
  from {        
    transform: translateX(-100%);    
  }
  to {        
    visibility: visible;
    transform: translateX(0%);
  }  
`;

const moveToRight = keyframes`
  from {
    transform: translateX(100%); 
  }
  to {
    visibility: visible;
    transform: translateX(0%);
  }
`;

const transitionForward = () => css`
  animation: ${moveToRight} 400ms ease-in-out;
`;

const transitionBackward = () => css`
  animation: ${moveToLeft} 400ms ease-in-out;
`;

export const Container = styled.div(({ theme: { backgroundMenu } }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  backgroundColor: backgroundMenu,
  overflow: "auto",
}));

export const Menu = styled.div(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "calc(100% - 70px)",
  overflow: "auto",

  "&.forward": {
    transitionForward,
  },

  "&.backward": {
    transitionBackward,
  },
}));
