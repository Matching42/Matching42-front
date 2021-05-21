import React from 'react'
import { TeamImgStyled, UserImgStyled } from './TeamImg.styles'

export const TeamImg = (props) => (
	<TeamImgStyled>
		<UserImgStyled url={props.profileUrl[0]} />
		<UserImgStyled url={props.profileUrl[1]} />
		<UserImgStyled url={props.profileUrl[2]} />
	</TeamImgStyled>
)
