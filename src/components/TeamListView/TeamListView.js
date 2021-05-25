import React from 'react';
import styled from 'styled-components';
import { TeamListViewStyled, TeamListTopbarStyled } from './TeamListView.styles';
import TeamListItemView from '../TeamListItemView/TeamListItemView';
import { Dropdown } from './Dropdown'
import { WaitToggleButton } from './WaitToggleButton';

const TeamListView = (props) => (
	<TeamListViewStyled>
		<TeamListTopbarStyled>
			<span>Team List 23건</span>
			<TopbarBtnStyled>
				<Dropdown />
				<WaitToggleButton />
			</TopbarBtnStyled>
		</TeamListTopbarStyled>
		{props.dummy.map(team => <TeamListItemView key={team.ID} subject={team.subject} startDate={team.startDate}/>)}
	</TeamListViewStyled>
);

TeamListView.defaultProps = {
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
		{
			ID: 3,
			leaderId: "seolim",
			memberId: ["seolim", "kwlee", "snpark"],
			subject: "cub3d",
			state: "progress",
			notionLink: "",
			gitLink: "",
			teamName: "1번팀",
			startDate: "D +21"},
		{
			ID: 4,
			leaderId: "seolim",
			memberId: ["seolim", "kwlee", "snpark"],
			subject: "cub3d",
			state: "progress",
			notionLink: "",
			gitLink: "",
			teamName: "1번팀",
			startDate: "D +21"},
		{
			ID: 5,
			leaderId: "seolim",
			memberId: ["seolim", "kwlee", "snpark"],
			subject: "cub3d",
			state: "progress",
			notionLink: "",
			gitLink: "",
			teamName: "1번팀",
			startDate: "D +21"},
		{
			ID: 6,
			leaderId: "seolim",
			memberId: ["seolim", "kwlee", "snpark"],
			subject: "cub3d",
			state: "progress",
			notionLink: "",
			gitLink: "",
			teamName: "1번팀",
			startDate: "D +21"},
		{
			ID: 7,
			leaderId: "seolim",
			memberId: ["seolim", "kwlee", "snpark"],
			subject: "cub3d",
			state: "progress",
			notionLink: "",
			gitLink: "",
			teamName: "1번팀",
			startDate: "D +21"},
	]
}

const TopbarBtnStyled = styled.div`
	display: flex;
	justify-content: space-between;
	width: 30%;
	padding: 0 5px;
`;

export default TeamListView;
