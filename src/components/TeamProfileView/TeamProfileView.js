import React from 'react';
import { TeamProfileViewStyled, TeamProfile, TeamDescription, TeamTagList } from './TeamProfileView.styles';
import { ReactComponent as EditIcon } from '../../assets/icons/edit_team_profile_icon.svg';
import Dday from '../Dday/Dday';

const TeamProfileView = ({ team }) => {
  const getDday = startDate => {
    const nowDate = new Date();
    const milliseconds = nowDate.getTime() - startDate.getTime();
    const days = milliseconds / 1000 / 60 / 60 / 24;

    return Math.floor(days);
  };

  return (
    <TeamProfileViewStyled>
      <TeamProfile>
        <TeamProfile.Name>{team.teamName}</TeamProfile.Name>
        <TeamProfile.EditButton>
          <EditIcon />
        </TeamProfile.EditButton>
        <Dday mode="dark" startDate={team.startDate} />
      </TeamProfile>
      <TeamDescription>Team GitHub Repository, Notion, Slack 적극 활용하여 동료들과 함께 학습을 진행해보세요!</TeamDescription>
      <TeamTagList>
        {team.tags.map((item, index) => (
          <TeamTagList.Item key={index}># {item}</TeamTagList.Item>
        ))}
      </TeamTagList>
    </TeamProfileViewStyled>
  );
};

export default TeamProfileView;
