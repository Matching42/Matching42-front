import React from 'react';
import { OverlayContainer } from '@react-aria/overlays';
import { MatchingStateViewStyled, MatchingState, MatchingStartButton, MatchingWaitButton } from './MatchingStateView.styles';
import useToggleDialog from '../../hooks/useToggleDialog';
import Dialog from '../Dialog/Dialog';
import DialogCloseButton from '../DialogCloseButton/DialogCloseButton';
import SurveyForm from '../SurveyForm/SurveyForm';

const MatchingStateView = ({ waitList, user, onMatchingButtonClick }) => {
  const { state, openButtonProps, openButtonRef } = useToggleDialog();

  const handleSubmitButtonClick = (selectedSubject, githubId, preferredCluster) => {
    onMatchingButtonClick?.(selectedSubject, githubId, preferredCluster);
  };

  return (
    <>
      <MatchingStateViewStyled>
        <MatchingState>
          현재 <MatchingState.Strong>{waitList.size}명</MatchingState.Strong>이 <MatchingState.Strong>매칭</MatchingState.Strong>을 기다리고 있어요!
        </MatchingState>
        {user?.waitMatching !== null ? (
          <MatchingWaitButton>매칭 대기중</MatchingWaitButton>
        ) : (
          <MatchingStartButton {...openButtonProps} ref={openButtonRef}>
            매칭 신청 +
          </MatchingStartButton>
        )}
      </MatchingStateViewStyled>
      {state.isOpen && (
        <OverlayContainer>
          <Dialog isOpen onClose={state.close} isDimissable type="form">
            <DialogCloseButton onCloseButton={state.close} />
            <SurveyForm onCloseButton={state.close} onSubmitButton={handleSubmitButtonClick} />
          </Dialog>
        </OverlayContainer>
      )}
    </>
  );
};

export default MatchingStateView;
