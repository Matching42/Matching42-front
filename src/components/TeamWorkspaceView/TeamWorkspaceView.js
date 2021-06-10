import React from 'react';
import { TeamWorkspaceViewStyled, Line, LinkList, FinishStudyButton } from './TeamWorkspaceView.styles';

const TeamWorkspaceView = () => {
  console.log('team workspace');
  return (
    <TeamWorkspaceViewStyled>
      <p>
        <TeamWorkspaceViewStyled.Title>Team Workspace Link</TeamWorkspaceViewStyled.Title>
        <TeamWorkspaceViewStyled.Line />
        <LinkList>
          <LinkList.Title>GitHub Repository</LinkList.Title>
          <LinkList.Link>https://github.com/Matching42/Matching42-front</LinkList.Link>
          <Line />
          <LinkList.Title>Notion</LinkList.Title>
          <LinkList.Link>
            <a href="https://github.com/Matching42/Matching42-front">https://github.com/Matching42/Matching42-front</a>
          </LinkList.Link>
          <Line />
          <LinkList.Title>Subject PDF</LinkList.Title>
          <LinkList.Link>
            <a href="https://github.com/Matching42/Matching42-front">https://github.com/Matching42/Matching42-front</a>
          </LinkList.Link>
          <Line />
        </LinkList>
        <FinishStudyButton>스터디 종료하기</FinishStudyButton>
      </p>
    </TeamWorkspaceViewStyled>
  );
};

export default TeamWorkspaceView;
