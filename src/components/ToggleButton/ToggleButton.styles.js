import styled from 'styled-components';

export const WaitToggleStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
`;

export const WaitSpanStyled = styled.div`
  padding-right: 8px;
  font-size: 1em;
`;

export const WaitToggleButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 18px;
  top: calc(100% - 16px);
  background-color: ${props => (props.toggle ? '#27BABB' : '#D5D5D5')};
  border-radius: 22px;
  cursor: pointer;
`;

export const ToggleStyled = styled.div`
  position: relative;
  left: ${props => (props.toggle ? '6px' : '-6px')};
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 50%;
  box-sizing: border-box;
  transition: left 0.23s;
`;
