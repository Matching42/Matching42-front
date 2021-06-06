import styled from 'styled-components';

export const TextInputStyled = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #252831;
  padding: 10px 5px;

  ::placeholder {
    color: rgba(37, 40, 49, 0.2);
  }
  :focus {
    outline: none;
    border-bottom: 1px solid #27babb;
    color: #27babb;
  }
`;
