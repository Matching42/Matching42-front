import React from 'react';
import { TeamImageStyled, UserImageStyled, RestMemberImageStyled } from './TeamImage.styles';

const TeamImage = ({ teamMember }) => {
	console.log("TeamImage");
	const teamMemberLen = teamMember.length;

	const UserImage = (key, member) => (
		<UserImageStyled key={key} url={`https://cdn.intra.42.fr/users/small_${member}.jpg`} />
	)

	const teamMemberLessthan3 = () => (
		teamMember.map((member, i) => (UserImage(i, member)))
	)

	const teamMembermorethan3 = () => {
		console.log("teamMember");
		return (
			[UserImage(0, teamMember[0]),
			UserImage(1, teamMember[1]),
			<RestMemberImageStyled key={2}>+{teamMemberLen - 2}</RestMemberImageStyled>]
		)
	}

	return (
		<TeamImageStyled>
			{teamMemberLen > 3 ? teamMembermorethan3() : teamMemberLessthan3()}
		</TeamImageStyled>
	);
};

export default TeamImage;
