import styled from 'styled-components';

export const TeamListViewStyled = styled.div`
  width: 100%;
  height: 78%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: start;
  background-color: #fff;
  padding: 30px;
  border-radius: 20px;
  box-sizing: border-box;
  font-size: 28px;

  .scrollbar {
    width: 4px;
    height: calc(100% - 80px);
    position: absolute;
    top: 70px;
    right: 30px;
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
  padding-bottom: 15px;
  display: flex;
  justify-content: space-between;
`;

TeamListTopbar.Title = styled.span`
  margin-left: 5px;
  font-size: 0.6em;
  font-weight: bold;
`;

TeamListTopbar.SubTitle = styled.span`
  margin-left: 8px;
  font-size: 0.9em;
  color: #27babb;
`;

TeamListTopbar.Button = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 40%;
  padding: 0 5px;
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
  padding-right: 10px;
  box-sizing: border-box;

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
  font-size: 16px;
  color: #252831;
`;
