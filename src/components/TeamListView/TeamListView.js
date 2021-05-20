import React from 'react';
import { TeamListViewStyled, TeamListTopbarStyled, TeamListStyled } from './TeamListView.styles';
import TeamLiView from '../TeamLiView/TeamLiView';
import { Dropdown } from './Dropdown'

const dummy = {
	ID: 1,
	leaderId: "seolim",
	memberId: ["seolim", "kwlee", "snpark"],
	subject: "cub3d",
	state: "progress",
	notionLink: "",
	gitLink: "",
	teamName: "1번팀",
	startDate: "D +21" // startDate에서 그냥 계산
};

const TeamListView = () => (
		<TeamListViewStyled>
			<TeamListTopbarStyled>
				<span>Team List 23건</span>
				<div className="Topbar-btn">
					<Dropdown />
					<span>Wait</span>
				</div>
			</TeamListTopbarStyled>
			{/* <TeamListStyled> */}
				<TeamLiView subject={dummy.subject} startDate={dummy.startDate}/>
				<TeamLiView subject={dummy.subject} startDate={dummy.startDate}/>
				<TeamLiView subject={dummy.subject} startDate={dummy.startDate}/>
				<TeamLiView subject={dummy.subject} startDate={dummy.startDate}/>
				<TeamLiView subject={dummy.subject} startDate={dummy.startDate}/>
				<TeamLiView subject={dummy.subject} startDate={dummy.startDate}/>
				<TeamLiView subject={dummy.subject} startDate={dummy.startDate}/>
			{/* </TeamListStyled> */}
		</TeamListViewStyled>
	);


export default TeamListView;
