import styled from 'styled-components';

export const WaitToggleStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
`;

export const WaitSpanStyled = styled.div`
  padding-right: 0.8rem;
  font-size: 1em;
`;

export const WaitToggleButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 1.8rem;
  top: calc(100% - 1.6rem);
  background-color: ${props => (props.toggle ? '#27BABB' : '#D5D5D5')};
  border-radius: 2.2rem;
  cursor: pointer;
`;

export const ToggleStyled = styled.div`
  position: relative;
  left: ${props => (props.toggle ? '0.6rem' : '-0.6rem')};
  width: 1rem;
  height: 1rem;
  background-color: #fff;
  border-radius: 50%;
  box-sizing: border-box;
  transition: left 0.23s;
`;
