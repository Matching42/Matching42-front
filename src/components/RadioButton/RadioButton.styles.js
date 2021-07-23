import styled from 'styled-components';

export const RadioButtonStyled = styled.div`
  width: 100%;
  padding: 20px 5px;
  font-size: 28px;
`;

export const RadioInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.5em;
  cursor: pointer;

  label {
    padding-left: 3px;
    padding-top: 2px;
    cursor: pointer;
  }
`;

export const CheckRadioButton = styled.input`
  cursor: pointer;
`;
