import styled, { css } from 'styled-components';

export const TeamImageStyled = styled.span`
  display: flex;
  align-items: center;
`;

const staticUserImageStyled = css`
	width: ${ props => props.size === "small" ? "20px" : "53px" };
	height: ${ props => props.size === "small" ? "20px" : "53px" };
	margin-left: ${ props => props.size === "small" ? "5px" : "0" };
`;

export const UserImageStyled = styled.img`
	${staticUserImageStyled}
  border-radius: 50%;
  background-image: url(${props => props.url});
  background-size: cover;
`;

export const RestMemberImageStyled = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 20px;
	height: 20px;
	background-color: #F2F2F2;
	border-radius: 50%;
	margin-left: 5px;
	font-size: 10px;
	font-weight: bold;
	color: #C9C9C9;
`;
