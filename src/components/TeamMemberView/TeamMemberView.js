import React from 'react';
import Lock from '../../assets/images/TeamMemberView_Lock.svg';
import Unlock from '../../assets/images/TeamMemberView_Unlock.svg';
import { TeamMemberViewStyled, TeamMemberViewTop } from './TeamMemberView.styles';
import TeamMemberImage from './TeamMemberImage/TeamMemberImage';

const TeamMemberView = ({ state, teamMember }) => {
  console.log('team member');
  return (
		<TeamMemberViewStyled>
			<TeamMemberViewTop>
				<div>
					<TeamMemberViewTop.Title>
						Member
					</TeamMemberViewTop.Title>
					<TeamMemberViewTop.Description>
						현재 멤버를 모집하고 {state === "wait_member" ? "있습니다." : "있지 않습니다."}
					</TeamMemberViewTop.Description>
				</div>
				<img src={state === "wait_member" ? Unlock : Lock} alt="logo" width="35.5" />
			</TeamMemberViewTop>
			<TeamMemberImage teamMember={teamMember}/>
		</TeamMemberViewStyled>
	)
};

export default TeamMemberView;
