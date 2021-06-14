import React from 'react';
import { TeamWorkspaceViewStyled, LinkList, FinishStudyButton } from './TeamWorkspaceView.styles';

const TeamWorkspaceView = props => {
  const { gitHub, notion, subjectPDF } = props;

  return (
    <TeamWorkspaceViewStyled>
      <TeamWorkspaceViewStyled.Title>Team Workspace Link</TeamWorkspaceViewStyled.Title>
      <TeamWorkspaceViewStyled.Line />
      <LinkList>
        <LinkList.Title>GitHub Repository</LinkList.Title>
        <LinkList.Link>
          <a href="https://github.com/Matching42/Matching42-front">{gitHub}</a>
        </LinkList.Link>
        <LinkList.Title>Notion</LinkList.Title>
        <LinkList.Link>
          <a href="https://github.com/Matching42/Matching42-front">{notion}</a>
        </LinkList.Link>
        <LinkList.Title>Subject PDF</LinkList.Title>
        <LinkList.Link>
          <a href="https://github.com/Matching42/Matching42-front">{subjectPDF}</a>
        </LinkList.Link>
      </LinkList>
      <TeamWorkspaceViewStyled.Button>
        <FinishStudyButton>스터디 종료</FinishStudyButton>
      </TeamWorkspaceViewStyled.Button>
    </TeamWorkspaceViewStyled>
  );
};

TeamWorkspaceView.defaultProps = {
  gitHub: 'https://github.com/Matching42/Matching42-front',
  notion: 'https://github.com/Matching42/Matching42-front',
  subjectPDF: 'https://github.com/Matching42/Matching42-front'
};

export default TeamWorkspaceView;
