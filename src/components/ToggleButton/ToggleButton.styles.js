import styled from 'styled-components';

export const WaitToggleStyled = styled.div`
  width: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 28px;
`;

export const WaitSpanStyled = styled.div`
  vertical-align: middle;
  padding: 2px 0;
  font-size: 0.5em;
`;

export const ToggleStyled = styled.div`
  position: absolute;
  left: ${props => (props.toggle ? '20px' : '4px')};
  width: 14px;
  height: 14px;
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
  width: 38px;
  height: 100%;
  background-color: ${props => (props.toggle ? '#27BABB' : '#D5D5D5')};
  border-radius: 22px;
`;
