import styled from 'styled-components';

export const TeamMemberViewStyled = styled.div`
  width: 59%;
  height: 100%;
  display: flex;
  justify-content: center;
	flex-direction: column;
  background-color: #fff;
  padding: 30px;
  border-radius: 20px;
  box-sizing: border-box;
  font-size: 24px;
`;

export const TeamMemberViewTop = styled.div`
	width: 100%;
	height: 50px;
	margin-left: 4px;
	border-bottom: 2px solid #F9F9F9;
	padding-bottom: 24.8px;
	display: flex;
	justify-content: space-between;
`;

TeamMemberViewTop.Wrap = styled.div`
`;

TeamMemberViewTop.Title = styled.h1`
	height: 33px;
	padding-bottom: 4px;
	font-weight: bold;
`;

TeamMemberViewTop.Lock = styled.div`
	cursor: pointer;
`;

TeamMemberViewTop.Description = styled.p`
	height: 17px;
	font-size: 0.5em;
`;
