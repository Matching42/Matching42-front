import React from 'react';
import { Link } from 'react-router-dom';
import { TeamListItemStyled, TeamListItemBox, EndText } from './TeamListItem.styles';
import HashTag from './common/HashTag/HashTag';
import TeamImage from './common/TeamImage/TeamImage';
import Dday from '../Dday/Dday';
import { ReactComponent as LockIcon } from '../../assets/icons/icon-teamListItemLock.svg';

const TeamListItem = ({ teamData }) => {
  const { memberID } = teamData;

  return (
    <Link to={`/detail/${teamData.ID}`}>
      <TeamListItemStyled>
        <TeamListItemBox>
          <TeamListItemBox.Subject>
            {teamData.teamName} {teamData.state !== 'wait_member' && <LockIcon />}
          </TeamListItemBox.Subject>
          {teamData.state === 'end' ? <EndText>END</EndText> : <Dday mode="light" startDate={teamData.startDate} />}
        </TeamListItemBox>
        <TeamListItemBox>d
          <HashTag tags={teamData.tag} />
          <TeamImage teamMember={memberID} />
        </TeamListItemBox>
      </TeamListItemStyled>
    </Link>
  );
};

export default TeamListItem;
