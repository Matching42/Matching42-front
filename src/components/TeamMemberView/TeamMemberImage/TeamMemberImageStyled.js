import styled from 'styled-components';

const TeamMemberImageStyled = styled.div`
	display: flex;
	flex-direction: row;
	justify-contents: flex-start;
	margin-left: 4px;
	padding-top: 0.91em;
`;

TeamMemberImageStyled.Item = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	align-self: flex-end;
	padding-right: 24.8px;
	font-size: 0.43em;
	text-align: center;
`;

TeamMemberImageStyled.EmptyName = styled.span`
	color: #D5D5D5;
`;

export default TeamMemberImageStyled;
