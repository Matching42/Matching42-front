import styled, {css, keyframes} from 'styled-components';

const fadein = keyframes`
  0% { top: 0px; opacity: 0; } 
  100% { top: -30px; opacity: 1; }
`;
const fadeout = keyframes`
  0% { top: -30px; opacity: 1; } 
  100% { top: 0px; opacity: 0; }
`;

const ToastStyled = styled.div`
  width: 100px;
  height: 50px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  visibility: ${({ show }) => show ? "visible" : "hidden"};
  background-color: ${({bgColor}) => bgColor};
  color: #fff;
  text-align: center;
  border-radius: 30px;
  padding: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  font-size: 1.6rem;
  -webkit-animation: ${({ show }) => show ? css`${fadein} 0.5s, ${fadeout} 0.5s 2.5s`: ""};
  animation: ${({ show }) => show ? css`${fadein} 0.5s, ${fadeout} 0.5s 2.5s`: ""};
  animation-fill-mode: forwards;
`;
 
export const Snackbar = styled.div`
  visibility: ${({ show }) => show ? "visible" : "hidden"};
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 30px;
  padding: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  font-size: 1.6rem;
  -webkit-animation: ${({ show }) => show ? `${fadein} 0.5s, ${fadeout} 0.5s 2.5s`: ""};
  animation: ${({ show }) => show ? `${fadein} 0.5s, ${fadeout} 0.5s 2.5s`: ""};
  animation-fill-mode: forwards;
`;

export default ToastStyled;