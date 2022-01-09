import styled from 'styled-components';

export const TeamListItemStyled = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 2rem 0.5rem 0.5rem 1rem;
  box-sizing: border-box;
  border-bottom: ${({ checkNotLast }) => (checkNotLast ? '2' : '0')}px solid #f9f9f9;

  :hover {
    color: #27babb;
  }
`;

export const TeamListItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  font-size: 2.8rem;
`;

TeamListItemBox.Title = styled.span`
  font-size: 0.6em;
  font-weight: bold;
  min-width: 120px;
  max-width: ${({ type }) => (type === 'allTeamList' ? 'calc(100% - 150px)' : '22rem')};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: relative;
  padding-right: 2rem;
  box-sizing: border-box;

  .lock_icon {
    width: 1.4rem;
    height: 1.4rem;
    position: absolute;
    right: 0;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

TeamListItemBox.Name = styled.span`
  font-size: 1em;
`;

export const EndText = styled.span`
  font-size: 0.6em;
  font-weight: bold;
  color: #bfbfbf;
`;
