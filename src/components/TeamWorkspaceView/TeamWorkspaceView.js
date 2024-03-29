import React, { useState } from 'react';
import { OverlayContainer } from '@react-aria/overlays';
import { TeamWorkspaceViewStyled, LinkList, InviteButton, Alert, EmptyText } from './TeamWorkspaceView.styles';
import useToggleDialog from '../../hooks/useToggleDialog';
import Dialog from '../Dialog/Dialog';
import DialogCloseButton from '../DialogCloseButton/DialogCloseButton';
import { useTeamSubjectLink } from '../../hooks/useUserData';
import { SelectItem } from '../SurveyForm/SurveyForm.styles';
import TextInput from '../TextInput/TextInput';
import { api } from '../../api';

const TeamWorkspaceView = props => {
  const { team, user, onFinishedButtonClick, onInviteButtonClick, teamDataMutate } = props;
  const { state, openButtonProps, openButtonRef } = useToggleDialog();
  const inviteModal = useToggleDialog();
  const { getTeamSubjectLink } = useTeamSubjectLink(team?.subject);
  const type = team.state === 'wait_member' && !team.memberID.includes(user.ID) ? 'join' : 'end';
  const [githubId, setGithubId] = useState('');
  const [checkEmptyInput, setCheckEmptyInput] = useState(false);
  const [responseStatus, setResponseStatus] = useState(null);

  const forBubblingEvent = () => {};

  const joinTeamEvent = async () => {
    if (user.teamID) return state.close();
    let data;
    if (!user.gitName) {
      data = {
        teamID: team.ID,
        userID: user.ID,
        gitName: githubId
      }
    } else {
      data = {
        teamID: team.ID,
        userID: user.ID
      }
    }
    console.log(data);
    if (!user.waitMatcing) {
      await api.post('/addmember', data);
    } else {
      await api.delete(`/waitlist/${user.ID}`);
      await api.post('/addmember', data);
    }
    teamDataMutate();
    state.close();
  };

  const onSubmitGithubId = () => {
    if (githubId === '') {
      setCheckEmptyInput(true);
      return;
    }
    joinTeamEvent();
  }

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
            {team.memberID.find(id => id === user.ID) && team.gitLink && <InviteButton {...inviteModal.openButtonProps} ref={inviteModal.openButtonRef} onClick={handleInviteButtonClick}>초대 받기</InviteButton>}
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
            {!user.gitName && 
              <Alert>
                <Alert.Text>팀 저장소 초대를 위해 깃허브 아이디를 입력해주세요. 
                </Alert.Text>
                <TextInput inputText={githubId} setInputText={setGithubId} checkEmptyInput={checkEmptyInput} responseStatus={responseStatus} setResponseStatus={setResponseStatus} />
                <Alert.Button><button type="button" onClick={onSubmitGithubId}>스터디 참여</button></Alert.Button></Alert>}
            {user.gitName && endStudyButton(type)}
          </Dialog>
        </OverlayContainer>
      )}
      {inviteModal.state.isOpen && (
        <OverlayContainer>
          <Dialog isOpen onClose={inviteModal.state.close} isDimissable type="alert">
            <DialogCloseButton onCloseButton={inviteModal.state.close} />
            <Alert>
              <Alert.Text>깃허브 계정에 등록된 이메일 주소로 초대 메일이 발송되었습니다. 메일함을 확인해주세요.</Alert.Text>
              <Alert.Button><button type="button" onClick={inviteModal.state.close}>확인</button></Alert.Button>
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
