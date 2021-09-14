import React from 'react';
import { OverlayContainer } from '@react-aria/overlays';
import { TeamWorkspaceViewStyled, LinkList, InviteButton, Alert, EmptyText } from './TeamWorkspaceView.styles';
import useToggleDialog from '../../hooks/useToggleDialog';
import Dialog from '../Dialog/Dialog';
import DialogCloseButton from '../DialogCloseButton/DialogCloseButton';
import { useTeamSubjectLink } from '../../hooks/useUserData';
// import { api } from '../../api';

const TeamWorkspaceView = props => {
  const { team, user, onFinishedButtonClick, onInviteButtonClick, teamDataMutate } = props;
  const { state, openButtonProps, openButtonRef } = useToggleDialog();
  const { getTeamSubjectLink } = useTeamSubjectLink(team?.subject);
  const type = team.state === 'wait_member' && !team.memberID.includes(user.ID) ? 'join' : 'end';

  const forBubblingEvent = () => {};

  const joinTeamEvent = async () => {
    if (user.teamID) return state.close();
    // TODO : 기능 활성화
    /*
    if (!user.waitMatcing) {
      await api.post('/addmember', {
        teamID: team.ID,
        userID: user.ID
      });
    } else {
      await api.delete(`/waitlist/${user.ID}`);
      await api.post('/addmember', {
        teamID: team.ID,
        userID: user.ID
      });
    }
    teamDataMutate();
    */
    state.close();
  };

  const handleFinishedButtonClick = () => {
    onFinishedButtonClick?.();
    state.close();
  };

  const handleInviteButtonClick = () => {
    onInviteButtonClick();
  };

  const endStudyButton = type => {
    const text = user.teamID ? '이미 참여 중인 팀이 있습니다.' : '스터디에 참여 하시겠습니까?';
    return (
      <Alert>
        <Alert.Text isError={user.teamID}>
          {type === 'end' ? '스터디 종료 시, 팀 페이지는 사라지게 됩니다.' : text}
          <br />
          {type === 'end' ? '완전히 종료하고자 한다면 아래 버튼을 눌러주세요.' : ''}
        </Alert.Text>
        <Alert.Button>
          <button type="button" onClick={type === 'end' ? handleFinishedButtonClick : joinTeamEvent}>
            {type === 'end' ? '완료' : '확인'}
          </button>
        </Alert.Button>
      </Alert>
    );
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
          <div className="scrollbar" />
        </LinkList>
        {user?.ID === team?.leaderID && team.state !== 'end' && (
          <TeamWorkspaceViewStyled.ButtonWrapper>
            <TeamWorkspaceViewStyled.Button {...openButtonProps} ref={openButtonRef} onClick={forBubblingEvent}>
              스터디 종료
            </TeamWorkspaceViewStyled.Button>
          </TeamWorkspaceViewStyled.ButtonWrapper>
        )}
        {team.state === 'wait_member' && !team.memberID.includes(user.ID) && (
          <TeamWorkspaceViewStyled.ButtonWrapper>
            <TeamWorkspaceViewStyled.Button {...openButtonProps} ref={openButtonRef} onClick={forBubblingEvent}>
              스터디 참여
            </TeamWorkspaceViewStyled.Button>
          </TeamWorkspaceViewStyled.ButtonWrapper>
        )}
      </TeamWorkspaceViewStyled>
      {state.isOpen && (
        <OverlayContainer>
          <Dialog isOpen onClose={state.close} isDimissable type="alert" padding={0}>
            <DialogCloseButton onCloseButton={state.close} />
            {endStudyButton(type)}
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
