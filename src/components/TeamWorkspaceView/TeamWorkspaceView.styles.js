import styled from 'styled-components';

export const TeamWorkspaceViewStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: top;
  background-color: #fff;
  padding: 30px;
  border-radius: 20px;
  box-sizing: border-box;
  font-size: 28px;
  position: relative;

  .scrollbar {
    width: 4px;
    height: calc(100% - 145px);
		max-height: 210px;
    position: absolute;
    z-index: 100;
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
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  font-size: 0.55em;
  margin-bottom: 10px;
`;

TeamWorkspaceViewStyled.Line = styled.div`
  border: solid 2px #f9f9f9;
`;

export const LinkList = styled.div`
  width: 100%;
  overflow: auto;
  margin-bottom: 15px;
  font-size: 0.75em;

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

LinkList.Title = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
  margin-top: 18px;
  margin-left: 6px;
`;

LinkList.Link = styled.div`
  border-bottom: 2px solid #f9f9f9;
  padding-bottom: 18px;

  a {
    color: #d3d4d6;
    font-size: 0.55em;
    margin-left: 6px;

    :hover {
      color: #808080;
    }
  }
`;

TeamWorkspaceViewStyled.Button = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TeamFinishedButton = styled.button`
  padding: 15px 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.5em;
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

Alert.Text = styled.p`
  font-size: 12px;
  color: #252831;
  line-height: 1.5;
  word-break: keep-all;
  text-align: center;
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
