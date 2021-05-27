import React from 'react'
import { TeamImgStyled, UserImgStyled } from './TeamImg.styles'

export const TeamImg = (props) => {
	
	if (!props.teamMember) return `Loading...`;

	return (<TeamImgStyled>
		{
			props.teamMember.map(member => <UserImgStyled key={member.id} url={`https://cdn.intra.42.fr/users/small_${member.name}.jpg`} />)
		}
	</TeamImgStyled>)
}
