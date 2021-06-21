import React from 'react';
import { TeamImageStyled, UserImageStyled, RestMemberImageStyled } from './TeamImage.styles';

const TeamImage = ({ teamMember }) => {

	const teamMemberLen = teamMember.length;

	const teamMemberLessthan3 = () => (
		teamMember.map((member, index) => (<UserImageStyled key={index} size="small" src={`https://cdn.intra.42.fr/users/small_${member}.jpg`} />))
	)

	const teamMembermorethan3 = () => (
		[
			<UserImageStyled key={0} size="small" src={`https://cdn.intra.42.fr/users/small_${teamMember[0]}.jpg`} />,
			<UserImageStyled key={1} size="small" src={`https://cdn.intra.42.fr/users/small_${teamMember[1]}.jpg`} />,
			<RestMemberImageStyled key={2}>+{teamMemberLen - 2}</RestMemberImageStyled>
		]
	);

	return (
		<TeamImageStyled>
			{teamMemberLen > 3 ? teamMembermorethan3() : teamMemberLessthan3()}
		</TeamImageStyled>
	);
};

export default TeamImage;
