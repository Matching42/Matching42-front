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
    if (props.isDuplicate)
      return '1px solid #FE4747';
    if (props.value !== '')
      return '1px solid #27babb';
    return '1px solid #252831';}};
  padding: 10px 5px;
  box-sizing: border-box;

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
  background-color: ${props => (props.length > 3 ? '#f9f9f9' : '#DEF5F5')};
  border-radius: 5px;
  cursor: ${props => (props.length > 3 ? 'default' : 'pointer')};
`;

export const DuplicateError = styled.div`
  display: ${props => (props.isVisible ? 'block' : 'none')};
  font-size: 10px;
  color: #fe4747;
  margin-top: 8px;
`;