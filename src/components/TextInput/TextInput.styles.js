import styled from 'styled-components';

export const TextInputStyled = styled.input`
  width: 100%;
  border: none;
  border-bottom: ${props => (props.checkEmptyInput && props.value === '' ? '1px solid #FE4747' : '1px solid #252831')};
  padding: 1rem 0.5rem;
  box-sizing: border-box;
  font-size: 1.2rem;

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
  font-size: 1em;
  color: #fe4747;
  margin-top: 0.8rem;
`;
