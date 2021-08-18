import styled from 'styled-components';

export const TeamListItemStyled = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px 5px 5px 10px;
  box-sizing: border-box;
  border-bottom: ${({ checkNotLast }) => (checkNotLast ? '1' : '0')}px solid #f9f9f9;

  :hover {
    color: #27babb;
  }
`;

export const TeamListItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  font-size: 2.8rem;
`;

TeamListItemBox.Title = styled.span`
  font-size: 0.6em;
  font-weight: bold;
  max-width: ${({ type }) => (type === 'allTeamList' ? '400px' : '220px')};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: relative;
  svg {
    position: absolute;
    top: 2px;
    right: 0px;
  }
  padding-right: 20px;
  box-sizing: border-box;
`;

TeamListItemBox.Name = styled.span`
  font-size: 1em;
`;

export const EndText = styled.span`
  font-size: 0.6em;
  font-weight: bold;
  color: #bfbfbf;
`;
