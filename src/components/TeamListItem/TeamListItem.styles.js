import styled from 'styled-components';

export const TeamListItemStyled = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px 5px 5px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #f9f9f9;
  font-size: 28px;

  :hover {
    color: #27babb;
  }
`;

export const TeamListItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`;

TeamListItemBox.Subject = styled.span`
  font-size: 0.7em;
  font-weight: bold;
`;

TeamListItemBox.StartDate = styled.span`
  font-size: 0.7em;
  font-weight: bold;
  color: #27babb;
`;
