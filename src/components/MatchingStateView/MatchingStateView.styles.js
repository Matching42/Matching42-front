import styled from 'styled-components';

export const MatchingStateViewStyled = styled.div`
  width: 100%;
  height: 18%;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 30px;
  border-radius: 20px;
  box-sizing: border-box;
  font-size: 28px;
`;

export const MatchingState = styled.div`
  font-size: 0.7em;
`;

MatchingState.Strong = styled.span`
  font-weight: bold;
`;

export const MatchingStartButton = styled.button`
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.5em;
  font-weight: bold;
  color: #fff;
  background-color: #27babb;
  border-radius: 10px;
  cursor: pointer;
  outline: 0;
  transition: 0.15s;

  :hover {
    background-color: #25a9aa;
  }
`;

export const MatchingWaitButton = styled.button`
  width: 120px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.5em;
  font-weight: bold;
  color: #fff;
  background-color: #d5d5d5;
  border-radius: 10px;
  cursor: pointer;
  outline: 0;
  transition: all.1s;

  .before {
    display: block;
  }
  .after {
    display: none;
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
  font-size: 12px;
  color: #252831;
  line-height: 1.5;
  word-break: keep-all;
  text-align: center;
`;

Alert.Button = styled.div`
  button {
    padding: 15px 30px;
    box-sizing: border-box;
    color: #fff;
    background-color: #27babb;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.15s;

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
      top: -34px;
    }
    50% {
      top: -38px;
    }
    100% {
      top: -34px;
    }
  }

  .bubble {
    padding: 6px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: #27babb;
    border-radius: 5px;
    font-size: 12px;
    color: #fff;
  }

  .bubble:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 8px 5px 0;
    border-color: #27babb transparent;
    display: block;
    width: 0;
    z-index: 1;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

MatchingInfo.Text = styled.p``;
