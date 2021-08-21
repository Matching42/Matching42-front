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
  .bubble {
    animation: expand 0.75s ease-in-out infinite;
    border-radius: 2rem;
    display: inline-block;
    transform-origin: ßcenter center;
    margin: 0 0.3rem;
    width: 0.5rem;
    height: 0.5rem;
    background: #d5d5d5;
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
