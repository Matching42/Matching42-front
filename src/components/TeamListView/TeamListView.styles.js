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
`;

export const TeamListTopbarStyled = styled.div`
	width: 100%;
	max-width: inherit;
	border-bottom: 2px solid rgba(0, 0, 0, 0.11);
	padding-bottom: 20px;
	font-weight: bold;
	display: flex;
	justify-content: space-between;
`;

export const TeamListStyled = styled.div`
	overflow: scroll;
`;

export const TopbarBtnStyled = styled.div`
	display: flex;
	justify-content: space-between;
	width: 30%;
	padding: 0 5px;
`;

export const TeamListContainerStyled = styled.div`
	width: 100%;
	overflow: scroll;
`;
