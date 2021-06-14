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
  font-size: 1rem;
  margin-bottom: 10px;
`;

TeamWorkspaceViewStyled.Line = styled.div`
  border: solid 2px #f9f9f9;
`;

export const Line = styled.div`
  border: solid 1px #f9f9f9;
  width: 1090px;
  border-bottom: 0px;
  text-align: left;
`;

export const LinkList = styled.div`
  font-size: 0.75rem;
  vertical-align: top;
`;

LinkList.Title = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 6px;
`;

LinkList.Link = styled.div`
  margin-top: 9px;
  margin-left: 6px;
  margin-bottom: 18px;
  a {
    color: #d3d4d6;
    :hover {
      color: #808080;
    }
  }
`;

export const FinishStudyButton = styled.div`
  width: 6rem;
  text-align: center;
  font-size: 0.8rem;
  background: #0bd;
  color: #fff;
  background: #27babb;
  border-radius: 5px;
  margin-top: 2.5rem;
  margin-left: 61rem;
  padding: 0.9rem;
  cursor: pointer;
`;
