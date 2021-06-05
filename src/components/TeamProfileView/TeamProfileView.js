import React from 'react';
import { TeamProfileViewStyled, TeamProfile, TeamDescription, TeamTagList } from './TeamProfileView.styles';

const TeamProfileView = () => {
  console.log('team profile');
  return (
    <TeamProfileViewStyled>
      <TeamProfile>
        <TeamProfile.Name />
        <TeamProfile.EditButton />
        <TeamProfile.Dday />
      </TeamProfile>
      <TeamDescription />
      <TeamTagList>
        <TeamTagList.Item>{}</TeamTagList.Item>
      </TeamTagList>
    </TeamProfileViewStyled>
  );
};

export default TeamProfileView;
