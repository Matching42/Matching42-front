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
		{id: 2, name: "minjakim"},
		{id: 3, name: "sulee"}
	]
}

export default TeamListItemView;
