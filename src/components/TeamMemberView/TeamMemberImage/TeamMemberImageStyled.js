import styled from 'styled-components';

const TeamMemberImageStyled = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	margin-left: 4px;
	padding-top: 15px;
`;

TeamMemberImageStyled.Item = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	align-self: flex-end;
	padding-right: 15px;
	font-size: 0.4em;
	line-height: 1.8;
	text-align: center;
	color: #252831;
`;

TeamMemberImageStyled.EmptyName = styled.span`
	color: #D5D5D5;
`;

export default TeamMemberImageStyled;
