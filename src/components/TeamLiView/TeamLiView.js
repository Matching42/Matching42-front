import React from 'react';
import { TeamLiViewStyled, TeamLidivStyled, SubjectStyled, StartDateStyled } from './TeamLiView.styles';
import { HashTags } from './HashTags'
import { TeamImg } from './TeamImg';

const profileUrl = [
	// team member profile_url
];

const TeamLiView = (Props) => (
	<TeamLiViewStyled>
		<TeamLidivStyled>
			<SubjectStyled>{Props.subject}</SubjectStyled>
			<StartDateStyled>{Props.startDate}</StartDateStyled>
		</TeamLidivStyled>
		<TeamLidivStyled>
			<HashTags />
			<TeamImg profileUrl={profileUrl}/>
		</TeamLidivStyled>
	</TeamLiViewStyled>
);

export default TeamLiView;
