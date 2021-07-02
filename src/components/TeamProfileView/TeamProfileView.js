import React from 'react';
import { OverlayContainer } from '@react-aria/overlays';
import { TeamProfileViewStyled, TeamProfileLeftBox, TeamDescription, TeamTagList, TeamProfileRightBox } from './TeamProfileView.styles';
import { ReactComponent as EditIcon } from '../../assets/icons/edit_team_profile_icon.svg';
import Dday from '../Dday/Dday';
import useToggleDialog from '../../hooks/useToggleDialog';
import Dialog from '../Dialog/Dialog';
import DialogCloseButton from '../DialogCloseButton/DialogCloseButton';
import EditForm from '../EditForm/EditForm';

const TeamProfileView = ({ team, user, onTeamProfileEditButtonclick }) => {
  const { state, openButtonProps, openButtonRef } = useToggleDialog();

  const handleSubmitButtonClick = (teamName, teamDescription, teamTags) => {
    onTeamProfileEditButtonclick?.(teamName, teamDescription, teamTags);
  }

  return (
    <>
      <TeamProfileViewStyled>
        <TeamProfileLeftBox>
          <TeamProfileLeftBox.Title>
            <TeamProfileLeftBox.Name>{team.teamName}</TeamProfileLeftBox.Name>
            {user?.id !== team?.data?.leaderID ? (
              <TeamProfileLeftBox.EditButton>
                <EditIcon />
              </TeamProfileLeftBox.EditButton>
            ) : (
              <TeamProfileLeftBox.EditButton isActive {...openButtonProps} ref={openButtonRef}>
                <EditIcon />
              </TeamProfileLeftBox.EditButton>
            )}
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
            <EditForm team={team} onCloseButton={state.close} onSubmitButton={handleSubmitButtonClick}  />
          </Dialog>
        </OverlayContainer>
      )}
    </>
  );
};

export default TeamProfileView;
