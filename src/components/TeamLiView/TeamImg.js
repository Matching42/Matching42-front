import React from 'react'
import { UserImgStyled } from './TeamImg.styles'

export const TeamImg = (props) => (
	<span>
		<UserImgStyled url={props.profileUrl[0]} />
		<UserImgStyled url={props.profileUrl[1]} />
		<UserImgStyled url={props.profileUrl[2]} />
	</span>
	// {props.profileUrl ? props.profileUrl.map(x => <UserImgStyled url={x}></UserImgStyled>) : <div>Not found</div>}
)
