import React, { useState } from 'react';
import { OverlayContainer } from '@react-aria/overlays';
import { MatchingStateViewStyled, MatchingState, MatchingStartButton, MatchingWaitButton, Alert, MatchingInfo } from './MatchingStateView.styles';
import useToggleDialog from '../../hooks/useToggleDialog';
import Dialog from '../Dialog/Dialog';
import DialogCloseButton from '../DialogCloseButton/DialogCloseButton';
import SurveyForm from '../SurveyForm/SurveyForm';
import { useStateData } from '../../hooks/useStateData';

const MatchingStateView = ({ user, onMatchingButtonClick, onMatchingCancelButtonClick, responseStatus }) => {
  const { state, openButtonProps, openButtonRef } = useToggleDialog();
  const { getMatchingStateData } = useStateData();
  const [dialogType, setDialogType] = useState(null);

  const handleSubmitButtonClick = (selectedSubject, githubId, preferredCluster) => {
    onMatchingButtonClick?.(selectedSubject, githubId, preferredCluster);
  };

  const handleCancelButtonClick = () => {
    onMatchingCancelButtonClick?.();
    state.close();
  };

  return (
    <>
      <MatchingStateViewStyled>
        <MatchingState>
          현재 <MatchingState.Strong>{getMatchingStateData.data.totalWaitingNumber}명</MatchingState.Strong>이 <MatchingState.Strong>매칭</MatchingState.Strong>을 기다리고 있어요!
        </MatchingState>
        {user.waitMatching !== null ? (
          <MatchingInfo>
            <MatchingInfo.Box>
              <div className="bubble">
                <MatchingInfo.Text>{user.waitMatching}</MatchingInfo.Text>
              </div>
            </MatchingInfo.Box>
            <MatchingWaitButton {...openButtonProps} ref={openButtonRef} onClick={() => setDialogType('cancel')}>
              <span className="before">매칭 대기중</span>
              <span className="after">신청 취소 -</span>
            </MatchingWaitButton>
          </MatchingInfo>
        ) : (
          <MatchingStartButton {...openButtonProps} ref={openButtonRef} onClick={() => setDialogType('submit')}>
            매칭 신청 +
          </MatchingStartButton>
        )}
      </MatchingStateViewStyled>
      {state.isOpen &&
        (dialogType === 'submit' ? (
          <OverlayContainer>
            <Dialog isOpen onClose={state.close} isDimissable type="form">
              <DialogCloseButton onCloseButton={state.close} />
              <SurveyForm onCloseButton={state.close} onSubmitButton={handleSubmitButtonClick} responseStatus={responseStatus}/>
            </Dialog>
          </OverlayContainer>
        ) : (
          <OverlayContainer>
            <Dialog isOpen onClose={state.close} isDimissable type="alert">
              <DialogCloseButton onCloseButton={state.close} />
              <Alert>
                <Alert.Text>매칭 신청을 취소하시겠습니까?</Alert.Text>
                <Alert.Button>
                  <button type="button" onClick={handleCancelButtonClick}>
                    확인
                  </button>
                </Alert.Button>
              </Alert>
            </Dialog>
          </OverlayContainer>
        ))}
    </>
  );
};

export default MatchingStateView;
