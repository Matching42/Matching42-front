import styled from 'styled-components';

export const WaitToggleStyled = styled.div`
  font-family: 'Spoqa Han Sans', sans-serif;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 28px;
`;

export const WaitSpanStyled = styled.div`
  height: auto;
  padding-top: 2px;
  padding-right: 8px;
  font-size: 0.45em;
  color: #252831;
`;

export const ToggleStyled = styled.div`
  position: absolute;
  left: ${props => (props.toggle ? '16px' : '4px')};
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 50%;
  box-sizing: border-box;
  transition: left 0.23s;
`;

export const WaitToggleButtonStyled = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
  align-items: center;
  width: 30px;
  height: 100%;
  top: calc(100% - 16px);
  line-height: 1.5;
  background-color: ${props => (props.toggle ? '#27BABB' : '#D5D5D5')};
  border-radius: 22px;
`;
