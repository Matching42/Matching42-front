import styled from 'styled-components';

export const MatchingStateViewStyled = styled.div`
  width: 100%;
  height: 18%;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 3rem;
  border-radius: 2rem;
  box-sizing: border-box;
  font-size: 2.8rem;
`;

export const MatchingState = styled.div`
  font-size: 0.65em;
  word-break: keep-all;
  line-height: 1.5;
`;

MatchingState.Strong = styled.span`
  font-size: 1em;
  font-weight: bold;
`;

export const MatchingStartButton = styled.button`
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.5em;
  font-weight: bold;
  color: #fff;
  background-color: #27babb;
  border-radius: 1rem;
  cursor: pointer;
  outline: 0;
  transition: 0.15s;

  :hover {
    background-color: #25a9aa;
  }
`;

export const MatchingWaitButton = styled.button`
  width: 10rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #fff;
  background-color: #d5d5d5;
  border-radius: 1rem;
  cursor: pointer;
  outline: 0;
  transition: all.1s;

  .before {
    display: block;
    font-size: 1.2em;
  }
  .after {
    display: none;
    font-size: 1.2em;
  }
  :hover {
    background-color: #bfbfbf;

    .before {
      display: none;
    }
    .after {
      display: block;
    }
  }
`;

export const Alert = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

Alert.Text = styled.p`
  font-size: 1.4rem;
  line-height: 1.5;
  word-break: keep-all;
  text-align: center;
`;

Alert.Button = styled.div`
  button {
    padding: 1.5rem 3rem;
    box-sizing: border-box;
    color: #fff;
    background-color: #27babb;
    border-radius: 1rem;
    cursor: pointer;
    transition: 0.15s;
    font-size: 1.4rem;
    font-weight: bold;

    :hover {
      background-color: #25a9aa;
    }
  }
`;

export const MatchingInfo = styled.div`
  display: flex;
  position: relative;
`;

MatchingInfo.Box = styled.div`
  position: absolute;
  top: -34px;
  left: 50%;
  transform: translateX(-50%);
  animation: boxAnimate 0.6s 0.3s infinite ease-in-out alternate;

  @keyframes boxAnimate {
    0% {
      top: -3.4rem;
    }
    50% {
      top: -3.8rem;
    }
    100% {
      top: -3.4rem;
    }
  }

  .bubble {
    padding: 0.6rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: #27babb;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    color: #fff;
  }

  .bubble:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 0.8rem 0.5rem 0;
    border-color: #27babb transparent;
    display: block;
    width: 0;
    z-index: 1;
    bottom: -0.6rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;

MatchingInfo.Text = styled.p``;
