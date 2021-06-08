import React from 'react';
import { UserImageStyled } from '../../TeamListItem/common/TeamImage/TeamImage.styles';
import TeamMemberImageStyled from './TeamMemberImageStyled';
import Crown from '../../../assets/images/TeamMemberView_Crown.svg';
import Empty from '../../../assets/images/TeamMemberView_Empty.svg';

const TeamMemberImage = ({ teamMember }) => {

	const teamMemberImageArray = (teamMember) => (
		teamMember.map((member, index) => (
			<TeamMemberImageStyled.Item key={index}>
				{index === 0 ? <img src={Crown} alt="leaderMark" width="16" /> : null}
				<UserImageStyled size="big" url={`https://cdn.intra.42.fr/users/small_${member}.jpg`} />
				{member}
			</TeamMemberImageStyled.Item>
		))
	)

	const emptyMemberArray = (teamMember) => {
		const len = 5 - teamMember.length;
		const Array = [];

		for (let i = 0; i < len; i++) {
			Array.push(
				<TeamMemberImageStyled.Item key={i + 3}>
					<UserImageStyled size="big" src={Empty} />
					<TeamMemberImageStyled.EmptyName>(empty)</TeamMemberImageStyled.EmptyName>
				</TeamMemberImageStyled.Item>
			)
		}
		return Array;
	}

	return (
		<TeamMemberImageStyled>
			{teamMemberImageArray(teamMember)}
			{emptyMemberArray(teamMember)}
		</TeamMemberImageStyled>
	)
}

export default TeamMemberImage;
