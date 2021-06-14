import React from 'react';
import { TeamWorkspaceViewStyled, Line, LinkList, FinishStudyButton } from './TeamWorkspaceView.styles';

const TeamWorkspaceView = props => {
  const { gitHub, notion, subjectPDF } = props;
  console.log('team workspace');
  return (
    <TeamWorkspaceViewStyled>
      <TeamWorkspaceViewStyled.Title>Team Workspace Link</TeamWorkspaceViewStyled.Title>
      <TeamWorkspaceViewStyled.Line />
      <LinkList>
        <LinkList.Title>GitHub Repository</LinkList.Title>
        <LinkList.Link>
          <a href="https://github.com/Matching42/Matching42-front">{gitHub}</a>
        </LinkList.Link>
        <Line />
        <LinkList.Title>Notion</LinkList.Title>
        <LinkList.Link>
          <a href="https://github.com/Matching42/Matching42-front">{notion}</a>
        </LinkList.Link>
        <Line />
        <LinkList.Title>Subject PDF</LinkList.Title>
        <LinkList.Link>
          <a href="https://github.com/Matching42/Matching42-front">{subjectPDF}</a>
        </LinkList.Link>
        <Line />
      </LinkList>
      <FinishStudyButton>스터디 종료하기</FinishStudyButton>
    </TeamWorkspaceViewStyled>
  );
};

TeamWorkspaceView.defaultProps = {
  gitHub: 'https://github.com/Matching42/Matching42-front',
  notion: 'https://github.com/Matching42/Matching42-front',
  subjectPDF: 'https://github.com/Matching42/Matching42-front'
};

export default TeamWorkspaceView;
