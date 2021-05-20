import styled from 'styled-components';

export const TeamListViewStyled = styled.div`
  width: 100%;
  height: 78%;
  display: flex;
	flex-direction: column;
  align-items: start;
  background-color: #fff;
  padding: 30px 30px 30px 30px;
  border-radius: 15px;
  box-sizing: border-box;
	overflow: scroll;
	// position: relative;
`;

export const TeamListTopbarStyled = styled.div`
	width: 100%;
	max-width: inherit;
	border-bottom: 2px solid rgba(0, 0, 0, 0.11);
	padding-bottom: 20px;
	font-weight: bold;
	display: flex;
	// position: fixed;
	justify-content: space-between;
`;

export const TeamListStyled = styled.div`
	overflow: scroll;
`;