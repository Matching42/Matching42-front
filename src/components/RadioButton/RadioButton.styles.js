import styled from 'styled-components';

export const RadioButtonStyled = styled.div`
  width: 100%;
  padding: 2rem 0.5rem;
  font-size: 1.2rem;
`;

export const RadioInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1em;
  cursor: pointer;

  label {
    padding-left: 0.3rem;
    padding-top: 0.6rem;
    cursor: pointer;
  }
`;

export const CheckRadioButton = styled.input`
  cursor: pointer;
`;
