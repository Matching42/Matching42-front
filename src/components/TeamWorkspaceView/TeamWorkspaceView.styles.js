import styled from 'styled-components';

export const TeamWorkspaceViewStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: top;
  position: relative;
  background-color: #fff;
  padding: 30px;
  border-radius: 20px;
  box-sizing: border-box;
  font-size: 2.8rem;
  position: relative;

  .scrollbar {
    width: 4px;
    height: ${({ user, team }) => (user?.ID === team?.leaderID ? 'calc(100% - 142px)' : '100%')};
    max-height: 210px;
    position: absolute;
    top: 60px;
    right: 30px;
    background-color: #fff;
    opacity: 1;
    transition: 0.5s;
  }
  :hover .scrollbar {
    opacity: 0;
  }
`;

TeamWorkspaceViewStyled.Title = styled.div`
  font-weight: bold;
  font-size: 0.55em;
  margin-bottom: 15px;
`;

TeamWorkspaceViewStyled.Line = styled.div`
  border: solid 2px #f9f9f9;
`;

export const LinkList = styled.div`
  width: 100%;
  overflow: auto;
  margin-bottom: ${({ user, team }) => (user?.ID === team?.leaderID ? '60px' : '0px')};
  font-size: 1.6rem;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #d5d5d5;
  }
  ::-webkit-scrollbar-track {
    margin: 10px 0 ${({ user, team }) => (user?.ID === team?.leaderID ? '35px' : '10px')};
  }
`;

LinkList.Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.8em;
  font-weight: bold;
  margin-top: 18px;
  margin-left: 6px;

  span {
    font-size: 1em;
  }
`;

LinkList.Link = styled.div`
  border-bottom: 2px solid #f9f9f9;
  padding-bottom: 18px;
  margin-top: 10px;

  a {
    color: #d3d4d6;
    font-size: 1.1rem;
    margin-left: 6px;

    :hover {
      color: #808080;
    }
  }
`;

TeamWorkspaceViewStyled.Button = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
  z-index: 100;
`;

export const InviteButton = styled.button`
  color: #27babb;
  font-size: 1.1rem;
  background-color: transparent;
  margin-left: 10px;
  cursor: pointer;
`;

export const TeamFinishedButton = styled.button`
  padding: 15px 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: bold;
  color: #fff;
  background-color: #27babb;
  border-radius: 10px;
  cursor: pointer;
  outline: 0;
  transition: 0.15s;

  :hover {
    background-color: #25a9aa;
  }
`;

export const Alert = styled.div`
  width: 110%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

Alert.Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  word-break: keep-all;
  text-align: center;
  letter-spacing: -1px;
`;

Alert.Button = styled.div`
  button {
    padding: 15px 30px;
    box-sizing: border-box;
    color: #fff;
    background-color: #27babb;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.15s;

    :hover {
      background-color: #25a9aa;
    }
  }
`;

export const EmptyText = styled.p`
  color: #d3d4d6;
  font-size: 1.1rem;
  margin-left: 6px;
`;
