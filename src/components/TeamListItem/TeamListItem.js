import React from 'react';
import { Link } from 'react-router-dom';
import { TeamListItemStyled, TeamListItemBox } from './TeamListItem.styles';
import HashTag from './common/HashTag/HashTag';
import TeamImage from './common/TeamImage/TeamImage';
import Dday from '../Dday/Dday';
import { ReactComponent as LockIcon } from '../../assets/icons/icon-teamListItemLock.svg';

const TeamListItem = ({ teamData }) => {

  const { leaderID, memberID } = teamData;
	const member = [leaderID, ...memberID];

  return (
    <Link to={`/detail/${teamData.ID}`}>
      <TeamListItemStyled>
        <TeamListItemBox>
          <TeamListItemBox.Subject>
            {teamData.subject} {teamData.state !== "wait_member" && <LockIcon />}
          </TeamListItemBox.Subject>
          <Dday mode="light" startDate={teamData.startDate} />
        </TeamListItemBox>
        <TeamListItemBox>
          <HashTag tags={teamData.tags} />
          <TeamImage teamMember={member} />
        </TeamListItemBox>
      </TeamListItemStyled>
    </Link>
  );
};

export default TeamListItem;
