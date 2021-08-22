import styled, { css, keyframes } from 'styled-components';

const fadein = keyframes`
  0% { top: 60px; opacity: 0; } 
  100% { top: 30px; opacity: 1; }
`;
const fadeout = keyframes`
  0% { top: 30px; opacity: 1; } 
  100% { top: 60px; opacity: 0; }
`;

const ToastStyled = styled.div`
  width: 150px;
  height: 50px;
  position: fixed;
  right: 5px;
  display: flex;
  align-items: center;
  z-index: 999;
  background-color: ${({ bgColor }) => bgColor};
  color: #fff;
  text-align: center;
  border-radius: 30px;
  padding: 1rem;
  font-size: 1rem;
  -webkit-animation: ${css`
    ${fadein} 0.5s, ${fadeout} 0.5s 2.5s
  `};
  animation: ${css`
    ${fadein} 0.5s, ${fadeout} 0.5s 2.5s
  `};
  animation-fill-mode: forwards;
`;

export const IconWrap = styled.span`
  width: 2.5vw;
  height: 2.5vh;
  margin-right: 10px;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export default ToastStyled;
