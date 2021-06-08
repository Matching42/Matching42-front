import React from 'react';
import { Link } from 'react-router-dom';
import { TeamListItemStyled, TeamListItemBox } from './TeamListItem.styles';
import HashTag from './common/HashTag/HashTag';
import TeamImage from './common/TeamImage/TeamImage';
import Lock from '../../assets/images/TeamListItem_Lock.svg'

const TeamListItem = ({ teamData }) => {

  const { ID, subject, startDate, tags, leaderID, memberID } = teamData;
	const member = [leaderID, ...memberID];

	const calculateStartDate = () => {
		const diff = new Date() - new Date(startDate);
		const day = 24 * 60 * 60 * 1000;
		return (parseInt(diff / day, 10));
	}

  return (
    <Link to={`/detail/${ID}`}>
      <TeamListItemStyled>
        <TeamListItemBox>
          <TeamListItemBox.Subject>
						{subject} {teamData.state === "wait_member" ? <img src={Lock} alt="logo" width="10" /> : null}
					</TeamListItemBox.Subject>
          <TeamListItemBox.StartDate>D +{calculateStartDate()}</TeamListItemBox.StartDate>
        </TeamListItemBox>
        <TeamListItemBox>
          <HashTag tags={tags} />
          <TeamImage teamMember={member} />
        </TeamListItemBox>
      </TeamListItemStyled>
    </Link>
  );
};

export default TeamListItem;
