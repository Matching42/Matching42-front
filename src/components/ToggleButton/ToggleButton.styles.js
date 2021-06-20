import styled from 'styled-components';

export const WaitToggleStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 28px;
`;

export const WaitSpanStyled = styled.div`
  vertical-align: middle;
  padding: 2px 0;
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
  background-color: ${props => (props.toggle ? '#27BABB' : '#D5D5D5')};
  border-radius: 22px;
`;
