import React from 'react';
import styled from 'styled-components';
import { TeamListViewStyled, TeamListTopbarStyled } from './TeamListView.styles';
import TeamLiView from '../TeamLiView/TeamLiView';
import { Dropdown } from './Dropdown'
import { WaitToggleButton } from './WaitToggleButton';

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
];

const TeamListView = () => (
		<TeamListViewStyled>
			<TeamListTopbarStyled>
				<span>Team List 23건</span>
				<TopbarBtnStyled>
					<Dropdown />
					<WaitToggleButton />
				</TopbarBtnStyled>
			</TeamListTopbarStyled>
			{dummy.map((x, idx) => <TeamLiView key={idx} subject={x.subject} startDate={x.startDate}/>)}
			{/* <TeamLiView subject={dummy.subject} startDate={dummy.startDate}/>
			<TeamLiView subject={dummy.subject} startDate={dummy.startDate}/>
			<TeamLiView subject={dummy.subject} startDate={dummy.startDate}/>
			<TeamLiView subject={dummy.subject} startDate={dummy.startDate}/>
			<TeamLiView subject={dummy.subject} startDate={dummy.startDate}/>
			<TeamLiView subject={dummy.subject} startDate={dummy.startDate}/>
			<TeamLiView subject={dummy.subject} startDate={dummy.startDate}/> */}
		</TeamListViewStyled>
	);

const TopbarBtnStyled = styled.div`
	display: flex;
	justify-content: space-between;
	width: 30%;
	padding: 0 5px;
`;

export default TeamListView;
