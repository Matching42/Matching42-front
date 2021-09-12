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
  padding: 3rem;
  border-radius: 2rem;
  box-sizing: border-box;
  font-size: 2.8rem;
`;

TeamWorkspaceViewStyled.Title = styled.div`
  font-weight: bold;
  font-size: 0.55em;
  margin-bottom: 1.5rem;
`;

TeamWorkspaceViewStyled.Line = styled.div`
  border: solid 2px #f9f9f9;
`;

export const LinkList = styled.div`
  width: 100%;
  overflow: auto;
  margin-bottom: ${({ user, team }) => (user?.ID === team?.leaderID ? '6rem' : '0px')};
  font-size: 1.6rem;

  .scrollbar {
    width: 4px;
    height: ${({ user, team }) => (user?.ID === team?.leaderID ? 'calc(100% - 142px)' : '100%')};
    max-height: 21rem;
    position: absolute;
    top: 6rem;
    right: 3rem;
    background-color: #fff;
    opacity: 1;
    transition: 0.5s;
  }
  :hover .scrollbar {
    opacity: 0;
  }

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
  margin-top: 1.8rem;
  margin-left: 0.6rem;

  span {
    font-size: 1em;
  }
`;

LinkList.Link = styled.div`
  border-bottom: 2px solid #f9f9f9;
  padding-bottom: 1.8rem;
  margin-top: 1rem;

  button {
    color: #d3d4d6;
    font-size: 1.1rem;
    margin-left: 0.6rem;
    background-color: transparent;

    :hover {
      color: #808080;
    }
  }
`;

TeamWorkspaceViewStyled.ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 25px;
  z-index: 100;
  @media screen and (min-height: 2160px) {
    position: absolute;
    bottom: 3rem;
    right: 3rem;
  }
`;

export const InviteButton = styled.button`
  color: #27babb;
  font-size: 1.1rem;
  background-color: transparent;
  margin-left: 1rem;
  cursor: pointer;
`;

TeamWorkspaceViewStyled.Button = styled.button`
  padding: 1.5rem 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: bold;
  color: #fff;
  background-color: #27babb;
  border-radius: 1rem;
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
  color: ${({isError}) => isError ? '#ca5c59' : '#252831'};
  font-size: 1.2rem;
  line-height: 1.5;
  word-break: keep-all;
  text-align: center;
  letter-spacing: -1px;
`;

Alert.Button = styled.div`
  button {
    padding: 1.5rem 3rem;
    box-sizing: border-box;
    color: #fff;
    background-color: #27babb;
    border-radius: 1rem;
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
  margin-left: 0.6rem;
`;
