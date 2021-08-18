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
            {user?.ID === team?.leaderID && <TeamProfileLeftBox.EditButton {...openButtonProps} ref={openButtonRef}>
                <EditIcon />
            </TeamProfileLeftBox.EditButton>}
          </TeamProfileLeftBox.Title>
          <TeamDescription>{team.description}</TeamDescription>
          <TeamTagList>
            <TeamTagList.Subject># {team.subject}</TeamTagList.Subject>
            {team && team.tag ? team.tag.map((item, index) => <TeamTagList.Item key={index}># {item}</TeamTagList.Item>) : <TeamTagList.Item># 아직 등록된 태그가 없어요!</TeamTagList.Item>}
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
