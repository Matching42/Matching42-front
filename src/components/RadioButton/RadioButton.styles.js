import styled from 'styled-components';

export const RadioButtonStyled = styled.div`
  width: 100%;
  padding: 20px 5px;
  font-size: 1.2rem;
`;

export const RadioInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1em;
  cursor: pointer;

  label {
    padding-left: 3px;
    padding-top: 6px;
    cursor: pointer;
  }
`;

export const CheckRadioButton = styled.input`
  cursor: pointer;
`;
