import React from 'react';
import { OverlayContainer } from '@react-aria/overlays';
import { TeamProfileViewStyled, TeamProfileLeftBox, TeamDescription, TeamTagList, TeamProfileRightBox } from './TeamProfileView.styles';
import { ReactComponent as EditIcon } from '../../assets/icons/edit_team_profile_icon.svg';
import Dday from '../Dday/Dday';
import useToggleDialog from '../../hooks/useToggleDialog';
import Dialog from '../Dialog/Dialog';
import DialogCloseButton from '../DialogCloseButton/DialogCloseButton';

const TeamProfileView = ({ team }) => {
  const { state, openButtonProps, openButtonRef } = useToggleDialog();

  return (
    <>
      <TeamProfileViewStyled>
        <TeamProfileLeftBox>
          <TeamProfileLeftBox.Title>
            <TeamProfileLeftBox.Name>{team.teamName}</TeamProfileLeftBox.Name>
            <TeamProfileLeftBox.EditButton {...openButtonProps} ref={openButtonRef}>
              <EditIcon />
            </TeamProfileLeftBox.EditButton>
          </TeamProfileLeftBox.Title>
          <TeamDescription>Team GitHub Repository, Notion, Slack 적극 활용하여 동료들과 함께 학습을 진행해보세요!</TeamDescription>
          <TeamTagList>
            {team.tags.map((item, index) => (
              <TeamTagList.Item key={index}># {item}</TeamTagList.Item>
            ))}
          </TeamTagList>
        </TeamProfileLeftBox>
        <TeamProfileRightBox>
          <Dday mode="dark" startDate={team.startDate} />
        </TeamProfileRightBox>
      </TeamProfileViewStyled>
      {state.isOpen && (
        <OverlayContainer>
          <Dialog isOpen onClose={state.close} isDimissable>
            <DialogCloseButton onCloseButton={state.close} />
          </Dialog>
        </OverlayContainer>
      )}
    </>
  );
};

export default TeamProfileView;
