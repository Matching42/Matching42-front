import React from 'react';
import styled from 'styled-components';
import Lock from '../../assets/images/TeamMemberView_Lock.svg';
import { TeamMemberViewStyled } from './TeamMemberView.styles';

const TeamMemberView = () => {
  console.log('team member');
  return (
		<TeamMemberViewStyled>
			<TeamMemberViewTop>
				<div>
				<TeamMemberViewTop.Title>
					Member
				</TeamMemberViewTop.Title>
				<TeamMemberViewTop.Description>
					현재 멤버를 모집하고 있지 않습니다.
				</TeamMemberViewTop.Description>
				</div>
				<img src={Lock} alt="logo" width="35.5" />
			</TeamMemberViewTop>

		</TeamMemberViewStyled>
	)
};

TeamMemberView.defaultProps = {
	
}

const TeamMemberViewTop = styled.div`
	width: 100%;
	height: 50px;
	border-bottom: 2px solid #F9F9F9;
	padding-bottom: 24.8px;
	display: flex;
	justify-content: space-between;
`;

TeamMemberViewTop.Wrap = styled.div`
`;

TeamMemberViewTop.Title = styled.h1`
	padding: 4px 0;
	font-weight: bold;
`;

TeamMemberViewTop.Description = styled.p`
	font-size: 0.5em;
`;

export default TeamMemberView;
