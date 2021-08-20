import styled from 'styled-components';

export const AddTagStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

AddTagStyled.Input = styled.input`
  width: 90%;
  border: none;
  border-bottom: ${props => {
    if (props.isError) return '1px solid #FE4747';
    if (props.value !== '') return '1px solid #27babb';
    return '1px solid #252831';
  }};
  padding: 1rem 0.5rem;
  box-sizing: border-box;
  font-size: 1.2rem;

  ::placeholder {
    color: rgba(37, 40, 49, 0.2);
  }
  :focus {
    outline: none;
    border-bottom: ${props => (props.length > 3 ? '1px solid #252831' : '1px solid #27babb')};
    color: #27babb;
  }
`;

export const PlusButton = styled.button`
  width: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.length > 3 ? '#f9f9f9' : '#DEF5F5')};
  border-radius: 0.5rem;
  cursor: ${props => (props.length > 3 ? 'default' : 'pointer')};
`;

export const DuplicateError = styled.div`
  display: ${props => (props.isVisible ? 'block' : 'none')};
  font-size: 1rem;
  color: #fe4747;
  margin-top: 0.8rem;
`;
