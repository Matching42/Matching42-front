import styled from 'styled-components';

export const TextInputStyled = styled.input`
  width: 100%;
  border: none;
  border-bottom: ${props => (props.checkEmptyInput && props.value === '' ? '1px solid #FE4747' : '1px solid #252831')};
  padding: 10px 5px;
  box-sizing: border-box;

  ::placeholder {
    color: rgba(37, 40, 49, 0.2);
  }
  :focus {
    outline: none;
    border-bottom: 1px solid #27babb;
    color: #27babb;
  }
`;

TextInputStyled.EmptyText = styled.p`
  font-size: 10px;
  color: #FE4747;
  margin-top: 8px;
`;
