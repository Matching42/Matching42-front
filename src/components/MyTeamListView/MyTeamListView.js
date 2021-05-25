import React from 'react';
import { MyTeamListViewStyled, TopbarStyled } from './MyTeamListView.styles';
import TeamListItemView from '../TeamListItemView/TeamListItemView';

const MyTeamListView = (props) => (
	<MyTeamListViewStyled>
		<TopbarStyled>My Team</TopbarStyled>
		{props.dummy.map(x => <TeamListItemView key={x.ID} subject={x.subject} startDate={x.startDate}/>)}
	</MyTeamListViewStyled>
);

MyTeamListView.defaultProps = {
	dummy: [
		{
			ID: 1,
			leaderId: "seolim",
			memberId: ["seolim", "kwlee", "snpark"],
			subject: "cub3d",
			state: "progress",
			notionLink: "",
			gitLink: "",
			teamName: "1번팀",
			startDate: "D +21"},
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
	]
};

export default MyTeamListView;
