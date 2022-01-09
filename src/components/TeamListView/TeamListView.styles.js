import styled from 'styled-components';

export const TeamListViewStyled = styled.div`
  width: 100%;
  height: 78%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: start;
  background-color: #fff;
  padding: 3rem;
  padding-bottom: ${({ isValidating }) => (isValidating ? '6rem' : '3rem')};
  border-radius: 2rem;
  box-sizing: border-box;

  .scrollbar {
    width: 4px;
    height: calc(100% - 80px);
    position: absolute;
    top: 70px;
    right: 3rem;
    background-color: #fff;
    opacity: 1;
    transition: 0.5s;
  }
  :hover .scrollbar {
    opacity: 0;
    height: 0;
  }
`;

export const TeamListTopbar = styled.div`
  width: 100%;
  max-width: inherit;
  border-bottom: 2px solid rgba(0, 0, 0, 0.11);
  padding-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2.8rem;
`;

TeamListTopbar.Title = styled.span`
  margin-left: 5px;
  font-size: 0.55em;
  font-weight: bold;
`;

TeamListTopbar.SubTitle = styled.span`
  margin-left: 0.8rem;
  font-size: 0.9em;
  color: #27babb;
`;

TeamListTopbar.Button = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 40%;
  padding: 0 0.5rem;
  font-size: 0.5em;
`;

TeamListTopbar.Dropdown = styled.div`
  margin-right: 10px;
`;

export const TeamListContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
  padding-right: 1rem;
  box-sizing: border-box;
  font-size: 2.8rem;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #d5d5d5;
  }
  ::-webkit-scrollbar-track {
    margin: 10px 0;
  }
`;

export const NoneTeamListData = styled.p`
  position: absolute;
  top: 50%;
  transform: translateX(-50%);
  left: 50%;
  font-size: 0.5em;
`;
