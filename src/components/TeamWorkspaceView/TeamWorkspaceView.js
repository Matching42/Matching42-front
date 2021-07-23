import React from 'react';
import { OverlayContainer } from '@react-aria/overlays';
import { TeamWorkspaceViewStyled, LinkList, TeamFinishedButton, Alert } from './TeamWorkspaceView.styles';
import useToggleDialog from '../../hooks/useToggleDialog';
import Dialog from '../Dialog/Dialog';
import DialogCloseButton from '../DialogCloseButton/DialogCloseButton';

const TeamWorkspaceView = props => {
  const { team, user, subjectPDF, onFinishedButtonClick } = props;
  const { state, openButtonProps, openButtonRef } = useToggleDialog();

  const forBubblingEvent = () => {};

  const handleFinishedButtonClick = () => {
    onFinishedButtonClick?.();
    state.close();
  };

  return (
    <>
      <TeamWorkspaceViewStyled className="scrollbar">
        <TeamWorkspaceViewStyled.Title>Team Workspace Link</TeamWorkspaceViewStyled.Title>
        <TeamWorkspaceViewStyled.Line />
        <LinkList>
          <LinkList.Title>GitHub Repository</LinkList.Title>
          <LinkList.Link>
            <a href={team.gitLink}>{team.gitLink}</a>
          </LinkList.Link>
          <LinkList.Title>Notion</LinkList.Title>
          <LinkList.Link>
            <a href={team.notionLink}>{team.notionLink}</a>
          </LinkList.Link>
          <LinkList.Title>Subject PDF</LinkList.Title>
          <LinkList.Link>
            <a href="https://github.com/Matching42/Matching42-front">{subjectPDF}</a>
          </LinkList.Link>
        </LinkList>
        {user.ID === team.leaderID && (
          <TeamWorkspaceViewStyled.Button>
            <TeamFinishedButton {...openButtonProps} ref={openButtonRef} onClick={forBubblingEvent}>
              스터디 종료
            </TeamFinishedButton>
          </TeamWorkspaceViewStyled.Button>
        )}
        <div className="scrollbar" />
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
