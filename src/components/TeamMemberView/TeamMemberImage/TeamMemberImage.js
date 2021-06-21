import React from 'react';
import { UserImageStyled } from '../../TeamListItem/common/TeamImage/TeamImage.styles';
import TeamMemberImageStyled from './TeamMemberImageStyled';
import { ReactComponent as CrownIcon } from '../../../assets/icons/TeamMemberView_Crown.svg';
import { ReactComponent as EmptyIcon } from '../../../assets/icons/TeamMemberView_Empty.svg';

const TeamMemberImage = ({ teamMember }) => {

	const teamMemberImageArray = (teamMember) => (
		teamMember.map((member, index) => (
			<TeamMemberImageStyled.Item key={index}>
				{index === 0 && <CrownIcon />}
				<UserImageStyled size="big" src={`https://cdn.intra.42.fr/users/small_${member}.jpg`} />
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
					<EmptyIcon width="45px" height="45px" />
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
