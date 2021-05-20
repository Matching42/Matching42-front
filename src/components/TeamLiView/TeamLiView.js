import React from 'react';
import { TeamLiViewStyled, TeamLidivStyled, SubjectStyled, StartDateStyled } from './TeamLiView.styles';
import { HashTags } from './HashTags'
import { TeamImg } from './TeamImg';

const profileUrl = [
	"https://cdn.intra.42.fr/users/seolim.jpg",
	"https://cdn.intra.42.fr/users/minjakim.jpg",
	"https://cdn.intra.42.fr/users/sulee.jpg"
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
