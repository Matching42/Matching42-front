import React from 'react';
import { ReactComponent as Lock } from '../../assets/icons/TeamMemberView_Lock.svg';
import { ReactComponent as Unlock } from '../../assets/icons/TeamMemberView_Unlock.svg';
import { TeamMemberViewStyled, TeamMemberViewTop } from './TeamMemberView.styles';
import TeamMemberImage from './TeamMemberImage/TeamMemberImage';

const TeamMemberView = ({ state, teamMember }) => (
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
			<TeamMemberViewTop.Lock>
				{state === "wait_member" ? <Unlock /> : <Lock />}
			</TeamMemberViewTop.Lock>
		</TeamMemberViewTop>
		<TeamMemberImage teamMember={teamMember}/>
	</TeamMemberViewStyled>
);

export default TeamMemberView;
