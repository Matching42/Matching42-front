import React from 'react';
import { OverlayContainer } from '@react-aria/overlays';
import { TeamWorkspaceViewStyled, LinkList, InviteButton, TeamFinishedButton, Alert, EmptyText } from './TeamWorkspaceView.styles';
import useToggleDialog from '../../hooks/useToggleDialog';
import Dialog from '../Dialog/Dialog';
import DialogCloseButton from '../DialogCloseButton/DialogCloseButton';
import { useTeamSubjectLink } from '../../hooks/useUserData';

const TeamWorkspaceView = props => {
  const { team, user, onFinishedButtonClick, onInviteButtonClick } = props;
  const { state, openButtonProps, openButtonRef } = useToggleDialog();
  const { getTeamSubjectLink } = useTeamSubjectLink(team?.subject);

  const forBubblingEvent = () => {};

  const handleFinishedButtonClick = () => {
    onFinishedButtonClick?.();
    state.close();
  };

  const handleInviteButtonClick = () => {
    onInviteButtonClick();
  };

  return (
    <>
      <TeamWorkspaceViewStyled className="scrollbar" user={user} team={team}>
        <TeamWorkspaceViewStyled.Title>Team Workspace Link</TeamWorkspaceViewStyled.Title>
        <TeamWorkspaceViewStyled.Line />
        <LinkList user={user} team={team}>
          <LinkList.Title>
            <span>GitHub Repository</span>
            {team.memberID.find(id => id === user.ID) && team.gitLink && <InviteButton onClick={handleInviteButtonClick}>초대 받기</InviteButton>}
          </LinkList.Title>
          <LinkList.Link>
            {team.gitLink ? (
              <button type="button" onClick={() => window.open(team.gitLink, '_blank')}>
                {team.gitLink}
              </button>
            ) : (
              <EmptyText>링크가 존재하지 않습니다.</EmptyText>
            )}
          </LinkList.Link>
          <LinkList.Title>Notion</LinkList.Title>
          <LinkList.Link>
            {team.notionLink ? (
              <button type="button" onClick={() => window.open(team.notionLink, '_blank')}>
                {team.notionLink}
              </button>
            ) : (
              <EmptyText>링크가 존재하지 않습니다.</EmptyText>
            )}
          </LinkList.Link>
          <LinkList.Title>Subject PDF</LinkList.Title>
          <LinkList.Link>
            {team.subject ? (
              <button type="button" onClick={() => window.open(getTeamSubjectLink?.data?.subjectPDF, '_blank')}>
                {getTeamSubjectLink?.data?.subjectPDF}
              </button>
            ) : (
              <EmptyText>링크가 존재하지 않습니다.</EmptyText>
            )}
          </LinkList.Link>
        </LinkList>
        <div className="scrollbar" />
        {user?.ID === team?.leaderID && team.state !== 'end' && (
          <TeamWorkspaceViewStyled.Button>
            <TeamFinishedButton {...openButtonProps} ref={openButtonRef} onClick={forBubblingEvent}>
              스터디 종료
            </TeamFinishedButton>
          </TeamWorkspaceViewStyled.Button>
        )}
      </TeamWorkspaceViewStyled>
      {state.isOpen && (
        <OverlayContainer>
          <Dialog isOpen onClose={state.close} isDimissable type="alert" padding={0}>
            <DialogCloseButton onCloseButton={state.close} />
            <Alert>
              <Alert.Text>
                스터디 종료 시, 팀 페이지는 사라지게 됩니다.
                <br />
                완전히 종료하고자 한다면 아래 버튼을 눌러주세요.
              </Alert.Text>
              <Alert.Button>
                <button type="button" onClick={handleFinishedButtonClick}>
                  완료
                </button>
              </Alert.Button>
            </Alert>
          </Dialog>
        </OverlayContainer>
      )}
    </>
  );
};

TeamWorkspaceView.defaultProps = {
  subjectPDF: 'https://github.com/Matching42/Matching42-front'
};

export default TeamWorkspaceView;
