import React from 'react';
import { MyTeamListViewStyled, TopbarStyled } from './MyTeamListView.styles';
import TeamLiView from '../TeamLiView/TeamLiView';

const dummy = [
	{
		ID: 1,
		leaderId: "seolim",
		memberId: ["seolim", "kwlee", "snpark"],
		subject: "cub3d",
		state: "progress",
		notionLink: "",
		gitLink: "",
		teamName: "1번팀",
		startDate: "D +21"}, // startDate에서 그냥 계산
	{
		ID: 2,
		leaderId: "seolim",
		memberId: ["seolim", "kwlee", "snpark"],
		subject: "cub3d",
		state: "progress",
		notionLink: "",
		gitLink: "",
		teamName: "1번팀",
		startDate: "D +21"},
];

const MyTeamListView = () => (
	<MyTeamListViewStyled>
		<TopbarStyled>My Team</TopbarStyled>
		{dummy.map(x => <TeamLiView key={x.ID} subject={x.subject} startDate={x.startDate}/>)}
		{/* <TeamLiView subject={dummy.subject} startDate={dummy.startDate}/>
		<TeamLiView subject={dummy.subject} startDate={dummy.startDate}/> */}
	</MyTeamListViewStyled>
);

export default MyTeamListView;
