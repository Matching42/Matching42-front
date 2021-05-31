import React from 'react';
import { Link } from 'react-router-dom';
import { TeamListItemStyled, TeamListItemBox } from './TeamListItem.styles';
import HashTag from './common/HashTag/HashTag';
import TeamImage from './common/TeamImage/TeamImage';

const TeamListItem = ({ teamData }) => {
  const { ID, subject, startDate, tags, memberId } = teamData;

  return (
    <Link to={`/detail/${ID}`}>
      <TeamListItemStyled>
        <TeamListItemBox>
          <TeamListItemBox.Subject>{subject}</TeamListItemBox.Subject>
          <TeamListItemBox.StartDate>{startDate}</TeamListItemBox.StartDate>
        </TeamListItemBox>
        <TeamListItemBox>
          <HashTag tags={tags} />
          <TeamImage teamMember={memberId} />
        </TeamListItemBox>
      </TeamListItemStyled>
    </Link>
  );
};

export default TeamListItem;
