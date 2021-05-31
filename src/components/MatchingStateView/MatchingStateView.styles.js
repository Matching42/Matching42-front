import styled from 'styled-components';

export const MatchingStateViewStyled = styled.div`
  width: 100%;
  height: 18%;
  display: flex;
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
`;
