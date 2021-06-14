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
  overflow: scroll;
  margin-bottom: 15px;
  font-size: 0.75em;
`;

LinkList.Title = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
  margin-top: 18px;
  margin-left: 6px;
`;

LinkList.Link = styled.div`
  border-bottom: 2px solid #F9F9F9;
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

export const FinishStudyButton = styled.div`
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
