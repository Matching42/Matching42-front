import React from 'react';
import { TeamProfileViewStyled, TeamProfileLeftBox, TeamDescription, TeamTagList, TeamProfileRightBox } from './TeamProfileView.styles';
import { ReactComponent as EditIcon } from '../../assets/icons/edit_team_profile_icon.svg';
import Dday from '../Dday/Dday';

const TeamProfileView = (props) => {
  const { team } = props;

  return (
    <TeamProfileViewStyled>
      <TeamProfileLeftBox>
        <TeamProfileLeftBox.Title>
          <TeamProfileLeftBox.Name>{team.teamName}</TeamProfileLeftBox.Name>
          <TeamProfileLeftBox.EditButton>
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
  );
};

export default TeamProfileView;
