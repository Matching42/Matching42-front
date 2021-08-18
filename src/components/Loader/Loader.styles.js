import styled from 'styled-components';

export const LoaderWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LoaderWrap2 = styled.div`
  position: absolute;
  bottom: 0;
`;

export const Bubbles = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  .bubble{
    animation: expand .75s ease-in-out infinite;
    border-radius: 20px;
    display: inline-block;
    transform-origin: ßcenter center;
    margin: 0 3px;
    width: 5px;
    height: 5px;
    background: #D5D5D5;
    &:nth-child(2) {
      animation-delay: 180ms;
    }
    &:nth-child(3) {
      animation-delay: 360ms;
    }

    @keyframes expand {
      0% {
        transform: scale(1);
      }
      25% {
        transform: scale(1.55);
      }
    }    
  }
`;
