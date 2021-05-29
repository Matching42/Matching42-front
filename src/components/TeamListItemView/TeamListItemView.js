import React from 'react';
import { TeamListItemViewStyled, TeamListItemdivStyled, SubjectStyled, StartDateStyled } from './TeamListItemView.styles';
import { HashTags } from './HashTags'
import { TeamImg } from './TeamImg';

const TeamListItemView = (props) => (
	<TeamListItemViewStyled>
		<TeamListItemdivStyled>
			<SubjectStyled>{props.subject}</SubjectStyled>
			<StartDateStyled>{props.startDate}</StartDateStyled>
		</TeamListItemdivStyled>
		<TeamListItemdivStyled>
			<HashTags />
			<TeamImg teamMember={props.memberId}/>
		</TeamListItemdivStyled>
	</TeamListItemViewStyled>
);

TeamListItemView.defaultProps = {
	memberId: [
		{id: 1, name: "seolim"},
		{id: 2, name: "kwlee"},
		{id: 3, name: "hyeokim"}
	]
}

export default TeamListItemView;
